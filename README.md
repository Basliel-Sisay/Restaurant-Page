🍔 Big Burger — Restaurant Page


A dynamic, JavaScript-driven restaurant website that showcases modular design, DOM manipulation, and Webpack integration.
Built for practice, styled for performance, and deployed with love ❤️.

🧭 Overview

Big Burger is a fictional restaurant website that demonstrates modern front-end development principles using Webpack and vanilla JavaScript.
The project’s goal is to build an entire multi-page experience without static HTML pages, relying instead on modular JS rendering.

It’s elegant, responsive, and modular — a foundation for any dynamic single-page web app.

🗂️ Project Structure
Restaurant-Page/
├── .gitignore                ← ignores node_modules & dist

├── package.json              ← dependencies & scripts

├── webpack.config.js         ← Webpack setup

├── src/

│   ├── index.js              ← main logic & tab switching

│   ├── home.js               ← homepage module

│   ├── menu.js               ← menu module

│   ├── contact.js            ← contact module

│   ├── styles.css            ← styles

│   ├── template.html         ← base HTML structure

│   └── logo.png              ← restaurant logo

└── dist/                     ← bundled output
    ├── index.html
    ├── main.js
    └── assets/


⚙️ Core Features

🔹 JavaScript-Only Rendering — No static HTML! Every element is created and appended dynamically.
🔹 Modular Architecture — Each page (Home, Menu, Contact) exists as its own JS module.
🔹 Webpack Bundling — Handles CSS, JS, and image assets efficiently.
🔹 Live Development Server — Real-time reloading during development via webpack-dev-server.
🔹 GitHub Pages Deployment — Seamless one-command deployment using gh-pages.

🧩 Setup & Usage
🔧 1. Clone the Repository
git clone https://github.com/Basliel-Sisay/Restaurant-Page.git
cd Restaurant-Page

📦 2. Install Dependencies
npm install

🚀 3. Start Development Server
npm start


Then visit: http://localhost:8080

🏗️ 4. Build for Production
npm run build

🍴 About Big Burger

Welcome to Big Burger, where every bite tells a story!
We’re obsessed with crafting the juiciest, freshest, and most flavorful burgers in town — served in a fun, welcoming environment.

🥩 Quality Promise

We use 100% locally sourced ingredients, from grass-fed beef to hand-picked organic veggies.
Our buns are baked fresh daily, and every sauce is made in-house for that authentic Big Burger taste.

📞 Contact & Delivery

📍 Address: Bole Atlas, Addis Ababa, Ethiopia
📱 Phone: +251 91 234 5678
📧 Email: contact@bigburger.com

🚗 Delivery Hotline: +251-911-777-888
📸 Instagram: @bigburger.et

💬 Twitter/X: @BigBurgerET

🧠 Learning Objectives

Through this project, you’ll gain practical experience in:

🔸 DOM manipulation and dynamic element creation

🔸 Using ES6 modules for cleaner code

🔸 Configuring Webpack for a modern JS environment

🔸 Managing build and dev scripts

🔸 Deploying static projects via GitHub Pages

🧰 Tech Stack
Technology	Purpose
🧱 HTML5 (template)	Structural layout
🎨 CSS3	Styling and responsiveness
⚡ JavaScript (ES6)	Logic and interactivity
🔧 Webpack	Bundling and build management
📦 npm	Dependency management
🌐 GitHub Pages	Hosting and deployment
👨‍💻 Author

👋 Basliel Sisay
Front-End Developer & Web Enthusiast passionate about modular design and clean code.

🌐 GitHub Profile

📧 basliel.ugr-3563-16@aau.edu.et

🏁 Deployment

Deploy easily to GitHub Pages using:

git branch gh-pages
git checkout gh-pages && git merge main --no-edit
npx webpack
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main


Then set GitHub Pages Source Branch → gh-pages.

Your live site will be available at:
🔗 https://basliel-sisay.github.io/Restaurant-Page/

⭐ Acknowledgments

Special thanks to The Odin Project community for their guidance and motivation in mastering Webpack and modular JavaScript.
