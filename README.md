# Siddharthan L — Data Analyst Portfolio

A responsive, single-page portfolio site (HTML/CSS/vanilla JS, no frameworks) with a light theme,
blue/teal accents, dark mode toggle, and smooth scroll animations (AOS).

## Before you deploy — replace these placeholders

1. **Links** — search for `your-profile` and `your.email@example.com` in `index.html` and swap in your
   real LinkedIn, GitHub, and email.
2. **Project links** — each project card has `href="#"` for GitHub/Live Demo buttons. Replace with your
   real repo and deployed-app URLs.
3. **Resume file** — add your resume as `assets/resume.pdf` (the Download Resume buttons already point here).
4. **Contact form** — the form currently only shows a confirmation message on submit; it doesn't send email.
   To actually receive messages, connect it to a free service like Formspree or Web3Forms (just change the
   `<form>` action and remove the JS preventDefault in `script.js`, or follow the service's snippet).
5. **Map** — the Contact section has a placeholder box where you can embed a real Google Maps iframe if wanted.
6. **Project images** — currently using icon placeholders (Font Awesome) on a gradient background. Swap the
   `.project-image` divs for real screenshots/GIFs of your dashboards and notebooks if you have them — this
   makes the biggest visual difference to recruiters.

## Deploying to GitHub Pages

1. Create a new GitHub repo, e.g. `your-username.github.io` (for a root domain) or any name (for a project page).
2. Push these files (`index.html`, `style.css`, `script.js`, `assets/`) to the repo's main branch.
3. Go to **Settings → Pages** in the repo, set the source branch to `main` (root), and save.
4. Your site will be live at `https://your-username.github.io/` (or `/repo-name/` for a project page) within a
   minute or two.

## File structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/
    ├── projects/
    └── resume.pdf   (add this yourself)
```
