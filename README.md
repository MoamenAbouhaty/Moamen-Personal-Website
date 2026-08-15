# Moamen Abouhaty — Personal Portfolio Website

Personal developer portfolio website for Moamen Abouhaty (Back-End AI Engineer | Junior Software Engineer), created for FlyRank AI Internship assignment **PF-04**.

## 📌 Project Overview
This website is a lightweight, responsive, and static single-page developer portfolio built strictly using pure **HTML5**, **CSS3**, and **Vanilla JavaScript**. It requires zero external dependencies, frameworks, or build tools.

## 🛠️ Technologies
- **HTML5**: Semantic tags, accessible structure, Open Graph tags.
- **CSS3**: Custom properties (variables), Flexbox, CSS Grid, mobile-first design, dark theme.
- **Vanilla JavaScript**: Mobile navigation toggle, dynamic date update, Intersection Observer scroll animations.
- **Node.js**: Used solely for generating the site via built-in system APIs (`fs`, `path`).

## 📁 Project Structure
```text
moamen-personal-website/
├── index.html
├── style.css
├── script.js
├── README.md
├── netlify.toml
├── robots.txt
├── sitemap.xml
└── assets/
    └── favicon.svg
```

## 🚀 How to Run Locally
1. Open terminal in the project directory:
   ```bash
   cd moamen-personal-website
   ```
2. Open `index.html` in any web browser directly:
   - Double-click `index.html` OR
   - Run a simple local HTTP server (optional):
     ```bash
     npx serve .
     ```

## 🌐 Deploying to Netlify
1. Log in to [Netlify](https://app.netlify.app/).
2. Drag and drop the entire `moamen-personal-website` folder into the Netlify manual deploy area.
3. Once deployed, navigate to **Site Settings > Change Site Name** and assign a professional custom subdomain (e.g., `moamen-abouhaty.netlify.app`).

## 🔗 Placeholders to Replace
Before final publication, update these placeholder values in the source files:
- **`https://www.linkedin.com/`**: Replace with actual LinkedIn profile URL.
- **`https://github.com/`**: Replace with actual GitHub profile URL.
- **`YOUR_CV_LINK_HERE`**: Replace with a direct link to your PDF resume/CV in `index.html`.
- **`YOUR_BOOKING_LINK_HERE`**: Replace with your meeting link (e.g., Calendly) in `index.html`.
- **`https://YOUR-NETLIFY-SITE.netlify.app/`**: Update canonical URLs in `index.html`, `robots.txt`, and `sitemap.xml` with your live Netlify domain.

## ✅ PF-04 Requirements Covered
- Fully static, framework-free vanilla stack.
- Modern developer aesthetic with terminal hero visual.
- Fully accessible with proper semantic structure and contrast.
- Complete SEO setup (meta description, Open Graph, sitemap, robots.txt).
- Netlify-ready configuration (`netlify.toml`).

## 🔄 Custom Domain & Subdomain Migration
Upon receiving capstone approval from FlyRank, you can assign your FlyRank custom domain/subdomain pointer directly to this Netlify site. No site rebuild or structural changes will be required—the domain pointer will target this hosted static site seamlessly.
