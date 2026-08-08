// ---------------------------------------------------------------------------
// Gallery image source.
//
// The gallery is the curated bundled photos in /public/images (see
// data/content.ts, which carries their hand-written captions) PLUS anything the
// owner tags "gallery" in the Cloudinary Media Library. Cloudinary uploads are
// additive — they never replace the bundled set.
//
// Uses Cloudinary's Admin API (`/resources/by_tag/...`) rather than the legacy
// `res.cloudinary.com/<cloud>/image/list/<tag>.json` endpoint, which is
// restricted by default on most accounts and returns 401.
//
// SERVER ONLY. This module reads CLOUDINARY_API_SECRET and must never be
// imported from a Client Component ('use client'). Next.js does not expose
// non-NEXT_PUBLIC_ env vars to the browser bundle, so the secret cannot leak,
// but keep these calls in Server Components / route handlers regardless.
//
// Setup + owner instructions: see CLOUDINARY_SETUP.md
// ---------------------------------------------------------------------------

import { galleryImages as localFallback } from '@/data/content';
import type { Dictionary } from '@/i18n/dictionaries/en';

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  w: number;
  h: number;
};

const CLOUD = process.env.CLOUDINARY_CLOUD_NAME?.trim();
const KEY = process.env.CLOUDINARY_API_KEY?.trim();
const SECRET = process.env.CLOUDINARY_API_SECRET?.trim();
const TAG = (process.env.CLOUDINARY_GALLERY_TAG || 'gallery').trim();

type CloudinaryResource = {
  public_id: string;
  format: string;
  version: number;
  width?: number;
  height?: number;
  created_at?: string;
  context?: { custom?: { caption?: string; alt?: string } };
};

// Turn a Cloudinary public_id ("jobs/boat-lifting_ab12cd") into a readable caption.
function humanize(publicId: string): string {
  const name = publicId.split('/').pop() ?? publicId;
  const words = name
    .replace(/\.[a-z0-9]+$/i, '') // strip extension
    .replace(/_[a-z0-9]{6,}$/i, '') // strip Cloudinary's random suffix
    .replace(/[-_]+/g, ' ')
    .trim();
  if (!words) return 'Crane & towing work';
  return words.charAt(0).toUpperCase() + words.slice(1);
}

// Delivery URL with automatic format + quality and a width cap.
function deliveryUrl(r: CloudinaryResource, width: number): string {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,c_limit,w_${width}/v${r.version}/${r.public_id}.${r.format}`;
}

/**
 * Returns the gallery images: the curated bundled photos (with their
 * hand-written captions) first, followed by anything the owner has uploaded to
 * Cloudinary under the `gallery` tag, newest first.
 *
 * Revalidated every 60s, so new Cloudinary uploads appear within a minute with
 * no redeploy. If Cloudinary is unconfigured or unreachable, the bundled photos
 * are still shown on their own.
 */
export async function getGalleryImages(dict?: Dictionary): Promise<GalleryImage[]> {
  const cloudImages = await getCloudinaryImages();
  return [...localised(dict), ...cloudImages];
}

/**
 * Bundled photos with captions swapped for the active language. The caption key
 * is the image's file name, e.g. /images/crane-boat-lifting.jpeg ->
 * `crane-boat-lifting`. Falls back to the English caption baked into the data.
 */
function localised(dict?: Dictionary): GalleryImage[] {
  if (!dict) return localFallback;
  const captions = dict.galleryCaptions as Record<string, string | undefined>;
  return localFallback.map((img) => {
    const key = img.src.split('/').pop()?.replace(/\.[a-z0-9]+$/i, '') ?? '';
    const caption = captions[key] ?? img.caption;
    return { ...img, caption, alt: `${caption} — ${img.alt}` };
  });
}

/** Cloudinary-hosted photos only. Returns [] on any failure. */
async function getCloudinaryImages(): Promise<GalleryImage[]> {
  if (!CLOUD || !KEY || !SECRET) return [];

  try {
    const auth = Buffer.from(`${KEY}:${SECRET}`).toString('base64');
    const url =
      `https://api.cloudinary.com/v1_1/${CLOUD}/resources/image/tags/${encodeURIComponent(TAG)}` +
      `?max_results=100&context=true&direction=desc`;

    const res = await fetch(url, {
      headers: { Authorization: `Basic ${auth}` },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(
        `[gallery] Cloudinary Admin API returned ${res.status}. Showing bundled photos only.`,
      );
      return [];
    }

    const data = (await res.json()) as { resources?: CloudinaryResource[] };
    const resources = Array.isArray(data.resources) ? data.resources : [];
    if (resources.length === 0) return [];

    return resources
      .slice()
      .sort((a, b) => (b.created_at ?? '').localeCompare(a.created_at ?? '')) // newest first
      .map((r) => {
        // Owner can override caption/alt per photo via Cloudinary's Context fields.
        const custom = r.context?.custom;
        const caption = custom?.caption?.trim() || humanize(r.public_id);
        const alt =
          custom?.alt?.trim() || `${caption} — Bhagyashri Cranes & Towing, Bhatkal`;
        return {
          src: deliveryUrl(r, 1600),
          alt,
          caption,
          w: r.width ?? 1600,
          h: r.height ?? 1066,
        };
      });
  } catch (err) {
    console.error('[gallery] Cloudinary fetch failed. Showing bundled photos only.', err);
    return [];
  }
}
