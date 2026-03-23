# Mohammed Aadil — Software Engineer Portfolio

![Portfolio Preview](./resume.pdf) <!-- Replace with an actual screenshot image later if desired -->

A sleek, hyper-responsive personal portfolio website engineered for speed, premium aesthetics, and scalable dynamic data-loading. Built as a Vanilla frontend application emphasizing zero-dependency CSS architecture and advanced Intersection Observer animations.

## 🚀 Live Demo
*(Insert your GitHub Pages link here once hosted! e.g., https://moaadil10.github.io/Aadil-Portfolio)*

## 🛠️ Tech Stack
-   **HTML5:** Semantic architecture focusing on accessibility.
-   **CSS3:** Fully customized "Clean SaaS" dark mode theme. Powered by native CSS variables (`:root`), Flexbox, CSS Grid matrices, and complex `cubic-bezier` staggering animations.
-   **JavaScript (Vanilla ES6):** 
    -   Dynamic Data Engine (`projects.js`) for rapidly iterating open-source project cards.
    -   Advanced UI inter-locking (Scroll triggers, dynamic CSS classes, Intersection Observers).
    -   Smart contextual routing for conditional UI assets (`resume.pdf` checking).
-   **API Integration:** Web3Forms for secure, serverless form processing.

## ✨ Core Features
-   **Data-Driven Projects Grid:** Easily add, edit, or remove past projects simply by editing a JSON-style JavaScript array (`projects.js`). The UI scales automatically.
-   **Dynamic Resume Hook:** Instantly load the Resume visibility toggle. If `resume.pdf` is placed in the root directory, the website automatically displays a "Download Resume" hook in the primary Hero section.
-   **Serverless Contact Flow:** Embedded API routing routes recruiter inquiries directly to a private email inbox without exposing actual `mailto:` tags to spam bots.
-   **Responsive Fluidity:** Flawless visual degradation from 4K ultrawide monitors down to mobile viewports.

---

## 💻 Local Development Setup

To test the application purely locally:
1. Clone the repository to your machine.
2. Open the folder in VS Code.
3. Install the **"Live Server"** extension if you do not have it.
4. Right-click `index.html` → **Open with Live Server**.
*(Note: Attempting to double-click `index.html` via the `file://` protocol will block the dynamic Resume button due to browser CORS security restrictions. A local server is strictly required for full functionality).*

---

## 🌐 Free Hosting Guide (GitHub Pages)

Follow these exact steps to push this code live and get a professional `https://` web address FOR FREE to share on LinkedIn/Resume:

### Step 1: Create a GitHub Repository
1. Log into your [GitHub Account](https://github.com/).
2. Click the **"+" icon** in the top right corner and select **"New repository"**.
3. Name your repository (e.g., `Aadil-Portfolio` or `moaadil10.github.io`).
4. Set the repository to **"Public"** (this is strictly required for free hosting).
5. Do **not** check "Add a README file" (you already have this one!).
6. Click the green **"Create repository"** button.

### Step 2: Upload Your Files
1. On your new repository page, look for the blue link that says **"uploading an existing file"** and click it.
2. Select **ALL** the files in your local folder (`index.html`, `style.css`, `script.js`, `projects.js`, `README.md`, and `resume.pdf`).
3. **Drag and drop** them all into the upload box on GitHub.
4. Once they finish uploading, scroll down and click the green **"Commit changes"** button.

### Step 3: Turn on GitHub Pages (The Magic Step!)
Your code is now on GitHub! Let's activate the live server.
1. In your repository on GitHub, click the **"Settings"** tab (the gear icon near the top right).
2. On the left-hand sidebar, scroll down and click on **"Pages"**.
3. Under the "Build and deployment" section, find the **"Source"** dropdown menu.
4. It currently says "None". Change it to **"main"** (or "master").
5. Click **"Save"**.

### 🎉 You are Live!
1. Wait about **1 to 2 minutes** for GitHub to build the cache.
2. Refresh the "Pages" settings screen. 
3. At the top of the screen, you will see a message: **"Your site is live at https://[your-username].github.io/..."**

You are now in production! You can put this link directly on your actual resume.
