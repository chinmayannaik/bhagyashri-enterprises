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

2. On the **Dashboard**, find the **API Keys** section and copy three values:
   - **Cloud name** (a short word, e.g. `vzklkekx`)
   - **API Key** (a long number)
   - **API Secret** (click the eye icon to reveal it)

3. **Add all three to the website:**
   - **On Vercel:** Project → **Settings → Environment Variables** → add each of:

     | Name | Value |
     |---|---|
     | `CLOUDINARY_CLOUD_NAME` | your cloud name |
     | `CLOUDINARY_API_KEY` | your API key |
     | `CLOUDINARY_API_SECRET` | your API secret |

     Then **Deployments → ⋯ → Redeploy** (env vars only apply to new builds).
   - **For local testing:** copy `.env.example` to `.env.local` and fill them in.

   > The API Secret is used only on the server. Next.js never sends
   > non-`NEXT_PUBLIC_` variables to the browser, so it is not exposed to
   > visitors. Never commit it to git — `.env.local` is already ignored.

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

### To set a custom caption for a photo (optional)
In the Media Library, open the photo → **Context** (or “Add context”) → add a
field named `caption` with the text you want. Add `alt` too if you want custom
alt text for search engines. Otherwise the file name is used.

### To REMOVE a photo
- In the **Media Library**, either **delete** the photo, or **remove the
  `gallery` tag** from it. It disappears from the site within ~1 minute.

### Notes
- Any image size/format works — Cloudinary auto-optimises and resizes for phones.
- Photos show newest-first.
- There is no limit you’ll realistically hit; the free plan is generous.

---

## How it works (for developers)

- `src/lib/gallery.ts` calls the Cloudinary **Admin API**
  (`GET /v1_1/<cloud>/resources/image/tags/gallery`) with Basic auth, revalidated
  every 60s, and builds optimised delivery URLs (`f_auto,q_auto,c_limit`).
- It deliberately does **not** use the legacy
  `res.cloudinary.com/<cloud>/image/list/<tag>.json` endpoint — that is
  restricted by default on most accounts and returns `401` with
  `x-cld-error: Resources of type list are restricted in this account`.
- Admin API rate limit is 500 req/hour on the free plan; a 60s revalidate window
  caps usage at ~60/hour.
- If any of the three env vars are missing, the request fails, or no tagged
  photos exist, it falls back to the local photos in `src/data/content.ts`
  (`/public/images/*`). Failures are logged to the server console.
- The gallery grid + lightbox live in `src/components/Gallery.tsx`; the home page
  shows the first four. Both read from `getGalleryImages()`.
