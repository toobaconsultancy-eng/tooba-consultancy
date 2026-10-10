# How to Deploy Tooba Consultancy on Hostinger via GitHub

Congratulations on upgrading to the **Hostinger Business Plan**! With the Business plan, you have access to **FTP Accounts**, **SSH Access**, and **Automated Git Deployments**.

The most reliable, professional way to deploy a Vite + React application from GitHub to Hostinger is using **GitHub Actions (Automated CI/CD)**. 

### Why GitHub Actions is Best:
- Hostinger's basic Git tool only copies raw source code (it does not automatically run `npm run build` on the server).
- With **GitHub Actions**, GitHub automatically runs `npm run build` for you in the cloud, optimizes all CSS/JS, and uploads only the deployable production files (`dist/`) directly into your Hostinger `public_html/`.
- Every time you push changes to GitHub (`git push`), your live website updates automatically within 30 seconds!

---

## Step 1: Create a GitHub Repository and Push Your Code

1. Log into your [GitHub account](https://github.com).
2. Click the **+** icon (top right) -> **New repository**.
3. Name it: **`tooba-consultancy`** (set to **Private** or **Public**).
4. Do **not** initialize with a README, .gitignore, or license (we already have them).
5. Click **Create repository**.
6. On your computer terminal (inside this project folder), run:
```bash
git init
git add .
git commit -m "feat: Tooba Consultancy production ready"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/tooba-consultancy.git
git push -u origin main
```
*(Replace `YOUR_GITHUB_USERNAME` with your real GitHub username).*

---

## Step 2: Get Your FTP Credentials from Hostinger Business Plan

1. Log into your **Hostinger Control Panel** ([hpanel.hostinger.com](https://hpanel.hostinger.com)).
2. Go to **Websites** -> select **toobaconsultancy.com** -> click **Dashboard**.
3. In the left-hand search bar, type **FTP Accounts** (or find under **Files** -> **FTP Accounts**).
4. You will see:
   - **FTP IP / Host**: (e.g. `145.79.30.91` or `ftp.toobaconsultancy.com`)
   - **FTP Username**: (e.g. `u123456789`)
   - **FTP Password**: (If you don't remember it, click **Change password** and set a strong password).
   - **Port**: `21`

---

## Step 3: Add the 3 Secrets to Your GitHub Repository

1. Open your repository on **GitHub**.
2. Go to **Settings** (top tab with gear icon).
3. In the left menu, click **Secrets and variables** -> **Actions**.
4. Click the green button: **New repository secret**.
5. Add the following 3 secrets one by one:

| Secret Name | Value |
| :--- | :--- |
| **`FTP_SERVER`** | Your Hostinger FTP Host (e.g., `145.79.30.91`) |
| **`FTP_USERNAME`** | Your Hostinger FTP username (e.g., `u123456789`) |
| **`FTP_PASSWORD`** | Your Hostinger FTP password |

---

## Step 4: Watch Your Site Automatically Deploy!

1. We have already created the workflow file: **`.github/workflows/deploy.yml`**.
2. Go to the **Actions** tab in your GitHub repository.
3. You will see the **Deploy Tooba Consultancy to Hostinger** workflow running!
4. It will:
   - ✅ Check out your code
   - ✅ Set up Node.js
   - ✅ Run `npm install`
   - ✅ Run `npm run build`
   - ✅ Transfer `index.html`, `.htaccess`, `assets/`, etc. directly to `public_html/`.
5. When the green checkmark appears (usually 30–45 seconds), visit **`https://www.toobaconsultancy.com/`**. Your website is LIVE!

---

## Alternative Method: Using Hostinger's Built-in Git Tool in hPanel

If you prefer to use Hostinger's built-in Git deployment tool under **Advanced** -> **Git**:

1. In Hostinger hPanel, go to **Advanced** -> **Git**.
2. **Repository URL**: Paste your GitHub HTTPS repository link (`https://github.com/YOUR_USERNAME/tooba-consultancy.git`).
3. **Branch**: `main`.
4. **Install directory**: Leave as `/public_html`.
5. Click **Create**.
6. **Note on Vite builds**: Since Hostinger's Git tool clones the raw repository files, ensure your repository's root contains the built files (or run `npm run build` via Hostinger SSH terminal). This is why **GitHub Actions (Method 1 above) is strongly recommended**!
