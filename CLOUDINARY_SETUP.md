# Gallery Photos — Owner Guide (Cloudinary)

The website gallery is powered by **Cloudinary**, a free image hosting service.
Kumar can add or remove gallery photos any time from Cloudinary's own website —
**no coding, no developer, no redeploy.** New photos appear on the site within
about a minute.

Until Cloudinary is set up, the site shows the original bundled photos, so it is
never empty.

---

## Part A — One-time setup (developer, ~10 minutes)

1. **Create a free Cloudinary account** at https://cloudinary.com/users/register_free
   (you can sign in with the business Gmail).

2. On the **Dashboard**, copy the **Cloud name** (a short word, e.g. `bhagyashri`).

3. **Enable the photo list feature** (required):
   - Go to **Settings (gear icon) → Security**.
   - Find **“Restricted media types”** and make sure **“Resource list”** is
     **UNticked / allowed**.
   - Save.
   > Without this, the site can’t read the photo list and will keep showing the
   > bundled photos.

4. **Add the Cloud name to the website:**
   - **On Vercel:** Project → **Settings → Environment Variables** → add
     `CLOUDINARY_CLOUD_NAME` = *your cloud name* → **Save** → **Redeploy**.
   - **For local testing:** copy `.env.example` to `.env.local` and fill in
     `CLOUDINARY_CLOUD_NAME`.

That’s it. From now on, only Part B is needed.

---

## Part B — Adding / removing photos (Kumar, anytime)

### To ADD photos
1. Go to https://cloudinary.com and log in.
2. Open the **Media Library**.
3. **Drag your photos in** (or click **Upload**).
4. **Select** the photos you just added (click the checkbox on each).
5. Click **“Add tag”**, type **`gallery`**, and confirm.
6. Done. The new photos appear on the website gallery within ~1 minute.

> Tip: give files clear names before uploading (e.g. `boat-lifting.jpg`,
> `truck-recovery.jpg`). The name becomes the caption shown on the photo.

### To REMOVE a photo
- In the **Media Library**, either **delete** the photo, or **remove the
  `gallery` tag** from it. It disappears from the site within ~1 minute.

### Notes
- Any image size/format works — Cloudinary auto-optimises and resizes for phones.
- Photos show newest-first.
- There is no limit you’ll realistically hit; the free plan is generous.

---

## How it works (for developers)

- `src/lib/gallery.ts` fetches
  `https://res.cloudinary.com/<cloud>/image/list/gallery.json` (revalidated every
  60s) and builds optimised delivery URLs (`f_auto,q_auto,c_limit`).
- If `CLOUDINARY_CLOUD_NAME` is unset, the request fails, or no tagged photos
  exist, it falls back to the local photos in `src/data/content.ts`
  (`/public/images/*`).
- The gallery grid + lightbox live in `src/components/Gallery.tsx`; the home page
  shows the first four. Both read from `getGalleryImages()`.
