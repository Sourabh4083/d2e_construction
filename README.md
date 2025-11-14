# D2E Construction – Next.js Project

This repository contains the full source code for the **D2E Construction Website**, built using **Next.js**, **Tailwind CSS**, **Framer Motion**, and optimized for smooth animations and responsive design.

---

## 🚀 Features

* Fully responsive UI for all devices
* Smooth scroll navigation with offsets
* Animated hero section with parallax + scroll effects
* Dynamic service cards with motion interactions
* Global background image effect
* SEO-friendly structure
* Clean folder organization

---

## 🛠️ Technologies Used

* **Next.js 14+**
* **React 18**
* **Tailwind CSS**
* **Framer Motion** (animations)
* **Next/Image** (optimized images)

---

## 📂 Project Structure

```
project/
│   package.json
│   tailwind.config.js
│   README.md
│
├── public/
│   ├── background1.jpg
│   └── icons/
│
├── app/
│   ├── page.jsx
│   ├── layout.jsx
│   └── components/
│       ├── Hero.jsx
│       ├── Navbar.jsx
│       ├── Services.jsx
│       └── Footer.jsx
```

---

## ▶️ Getting Started

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Run the development server

```
npm run dev
```

Visit: **[http://localhost:3000](http://localhost:3000)**

---

## 📦 Build for production

```
npm run build
npm start
```

---

## 🌐 Deployment

You can deploy this Next.js project easily using:

* **Vercel** (recommended) ✔️
* Netlify
* Docker

Deploy on Vercel:

```
npx vercel
```

---

## 🖼️ Background Image Setup

Make sure your background file is inside:

```
/public/background1.jpg
```

And used like:

```jsx
style={{ backgroundImage: "url('/background1.jpg')" }}
```

---

## 📧 Contact

If you want help improving the UI or adding new pages, feel free to reach out!

**Developer:** Sourabh Prasad

---

⭐ If you like this project, don’t forget to star the repo!
