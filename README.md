# Paradise Nursery — e-plantShopping

A responsive plant-shopping application built with React, Vite, React Router, and Redux Toolkit.

## Features
- Landing page and About Us page
- Plant catalog with Aromatic and Medicinal categories
- Add-to-cart button and live navigation cart count
- Increase/decrease quantities, remove items, and calculate totals
- Empty-cart state, continue shopping, and checkout confirmation
- Responsive layout

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## GitHub submission
Create a **public** repository named `e-plantShopping`, then run these commands from this project folder after creating the repository:

```bash
git init
git add .
git commit -m "Build Paradise Nursery shopping cart"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/e-plantShopping.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. Do not commit passwords, tokens, or private credentials.

## Deployment
You can deploy the project on Vercel or Netlify by importing the public GitHub repository. Use `npm run build` as the build command and `dist` as the output directory. Copy the live URL after deployment for the Coursera submission.

## Required Coursera files
The project includes `README.md`, `src/AboutUs.jsx`, `src/App.css`, `src/App.jsx`, `src/CartSlice.jsx`, `src/ProductList.jsx`, and `src/CartItem.jsx`.
