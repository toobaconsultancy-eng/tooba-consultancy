# How to Deploy Tooba Consultancy on Hostinger (toobaconsultancy.com)

This project is built with React, TypeScript, Vite, and Tailwind CSS. When built, it produces standard, optimized HTML, CSS, JavaScript, and image assets in the `dist/` directory that can run on any Hostinger plan (Shared Web Hosting, Cloud Hosting, or VPS).

---

## Method 1: Upload via Hostinger File Manager (Quickest & Recommended)

This method takes less than 3 minutes.

### Step 1: Generate the Production Build
If you are on your local computer, open your terminal in the project folder and run:
```bash
npm install
npm run build
```
This generates the optimized production files inside the **`dist`** folder.

### Step 2: Zip the contents of the `dist` folder
1. Open the **`dist`** folder.
2. Select **all files and folders inside `dist`**:
   - `index.html`
   - `.htaccess`
   - `favicon.svg`
   - `robots.txt`
   - `sitemap.xml`
   - `assets/` folder
3. Right-click and choose **Compress / Send to ZIP** (e.g., name it `toobaconsultancy.zip`).
   > **Note:** Compress the *contents* inside `dist/`, not the `dist` folder itself.

### Step 3: Upload to Hostinger hPanel
1. Log in to your **Hostinger Control Panel** ([hpanel.hostinger.com](https://hpanel.hostinger.com)).
2. Go to **Websites** and select **toobaconsultancy.com**.
3. Under **Files**, click **File Manager** (Access files of toobaconsultancy.com).
4. Double-click to open the **`public_html`** folder.
5. If there is a default `default.php` or `index.html` file from Hostinger, you can delete it.
6. Click the **Upload** button (top right) -> choose **File** -> select your `toobaconsultancy.zip`.
7. Once uploaded, right-click `toobaconsultancy.zip` in File Manager and select **Extract**.
8. Extract files directly into `public_html/`.
9. Delete the uploaded `.zip` file.

Your website is now **LIVE** on `https://toobaconsultancy.com`!

---

## Method 2: Deploy via Git in Hostinger

If your code is hosted in a GitHub repository:
1. In Hostinger hPanel, go to **Advanced** -> **Git**.
2. Paste your repository URL and choose the `main` branch.
3. Set the Install directory to `/public_html` (or configure automated build action).
4. Deploy the repository.

---

## Verification & Pre-Configured Files Included

We have already configured and included all production server files in `public/` (which automatically get included in `dist/`):
- **`.htaccess`**:
  - Automatically redirects all `http://` traffic to `https://toobaconsultancy.com`.
  - Canonicalizes `www` to non-www.
  - Handles Single Page Application (SPA) routing (prevents 404 errors on refresh).
  - Enables Gzip/Deflate compression for fast loading speeds.
  - Implements browser caching (1 year for images/JS/CSS, 0s for HTML).
  - Adds security headers (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`).
- **`robots.txt`**: Configured for search engines with sitemap reference.
- **`sitemap.xml`**: Pre-configured XML sitemap for Google Search Console and Bing.
- **`favicon.svg`**: High-resolution brand monogram icon.
- **`index.html`**: Complete SEO meta tags, OpenGraph, Twitter card, and Schema.org structured data.

---

## SSL & Domain Checklist on Hostinger
1. In Hostinger hPanel, ensure the domain **toobaconsultancy.com** has an active **Free Let's Encrypt SSL** certificate installed (under **Security** -> **SSL**).
2. Ensure **Force HTTPS** is enabled in Hostinger dashboard (our `.htaccess` also enforces this).
