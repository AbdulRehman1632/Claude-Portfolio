# Abdul Rehman — Portfolio

Dark & techy React + Vite portfolio website.

---

## 🚀 How to Run

### Step 1 — Install Node.js
If you don't have Node.js installed, download it from:
👉 https://nodejs.org  (choose the LTS version)

### Step 2 — Install dependencies
Open a terminal inside the project folder and run:
```
npm install
```

### Step 3 — Start the dev server
```
npm run dev
```

Then open your browser and go to:
👉 http://localhost:5173

---

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── README.md
│
├── public/
│   └── cv/
│       └── Abdul-Rehman-CV.pdf   ← PUT YOUR CV FILE HERE
│
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    │
    ├── data/
    │   └── data.js               ← Edit all your info here
    │
    └── components/
        ├── Navbar.jsx / .module.css
        ├── Hero.jsx   / .module.css
        ├── About.jsx  / .module.css
        ├── Skills.jsx / .module.css
        ├── Projects.jsx / .module.css
        ├── Contact.jsx  / .module.css
        └── Footer.jsx   / .module.css
```

---

## 📄 Add Your CV

1. Create a folder called `cv` inside the `public/` folder
2. Place your CV file inside and name it exactly: `Abdul-Rehman-CV.pdf`
3. The Download CV button will now work automatically

---

## ✏️ Edit Your Info

All your personal data is in one place:
```
src/data/data.js
```

Change your name, projects, skills, social links, contact info — all from this single file.

---

## 🌐 Deploy to Netlify (Free)

1. Build the project:
```
npm run build
```
2. Go to https://netlify.com → drag & drop the `dist/` folder
3. Your site is live! 🎉

---

## 🛠 Tech Stack

- React 18
- Vite 5
- CSS Modules
- Font Awesome Icons
- Google Fonts (Space Mono + Syne)
