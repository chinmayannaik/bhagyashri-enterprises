// ---------------------------------------------------------------------------
// Gallery image source.
//
// Photos are managed by the owner in the Cloudinary Media Library (no code,
// no redeploy). Any image tagged "gallery" in Cloudinary shows up here.
//
// If Cloudinary is not configured yet (or unreachable), we gracefully fall
// back to the bundled local photos in /public/images, so the gallery is never
// empty and the site keeps working.
//
// Setup + owner instructions: see CLOUDINARY_SETUP.md
// ---------------------------------------------------------------------------

import { galleryImages as localFallback } from '@/data/content';

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  w: number;
  h: number;
};

const CLOUD = process.env.CLOUDINARY_CLOUD_NAME?.trim();
const TAG = (process.env.CLOUDINARY_GALLERY_TAG || 'gallery').trim();

type CloudinaryResource = {
  public_id: string;
  format: string;
  version: number;
  width?: number;
  height?: number;
  created_at?: string;
};

// Turn a Cloudinary public_id ("jobs/boat-lifting_2") into a readable caption.
function humanize(publicId: string): string {
  const name = publicId.split('/').pop() ?? publicId;
  const words = name
    .replace(/\.[a-z0-9]+$/i, '') // strip any extension
    .replace(/[-_]+/g, ' ')
    .replace(/\b\d{6,}\b/g, '') // drop long auto-generated id chunks
    .trim();
  if (!words) return 'Crane & towing work';
  return words.charAt(0).toUpperCase() + words.slice(1);
}

// Cloudinary delivery URL with automatic format + quality and a width cap.
function deliveryUrl(r: CloudinaryResource, width: number): string {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,c_limit,w_${width}/v${r.version}/${r.public_id}.${r.format}`;
}

/**
 * Returns the gallery images. Fetches from Cloudinary when configured,
 * revalidated every 60s so new uploads appear within a minute with no deploy.
 * Falls back to the local /public/images set on any failure.
 */
export async function getGalleryImages(): Promise<GalleryImage[]> {
  if (!CLOUD) return localFallback;

  try {
    const res = await fetch(
      `https://res.cloudinary.com/${CLOUD}/image/list/${TAG}.json`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) return localFallback;

    const data = (await res.json()) as { resources?: CloudinaryResource[] };
    const resources = Array.isArray(data.resources) ? data.resources : [];
    if (resources.length === 0) return localFallback;

    return resources
      .slice()
      .sort((a, b) => (b.created_at ?? '').localeCompare(a.created_at ?? '')) // newest first
      .map((r) => {
        const caption = humanize(r.public_id);
        return {
          src: deliveryUrl(r, 1600),
          alt: `${caption} — Bhagyashri Crane Service, Bhatkal`,
          caption,
          w: r.width ?? 1600,
          h: r.height ?? 1066,
        };
      });
  } catch {
    return localFallback;
  }
}
