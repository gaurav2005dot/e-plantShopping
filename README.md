# Paradise Nursery

Paradise Nursery is a React + Redux shopping application for an online
houseplant store. Visitors land on a welcome page, browse houseplants
grouped into categories, add plants to a shopping cart, and manage
quantities on a dedicated cart page.

## Features

- Landing page with the Paradise Nursery brand and a "Get Started" button
- Product listing page with plants grouped into three categories
  (Indoor Plants, Succulents, Flowering Plants), each showing a thumbnail,
  name, and price
- "Add to Cart" functionality with a Redux-powered cart, a live item count
  in the navbar, and buttons that disable once a plant has been added
- Shopping cart page showing per-item and total costs, quantity controls,
  item removal, a "Continue Shopping" link, and a "Coming Soon" checkout
  action
- An About Us page with background on the company

## Tech Stack

- React
- Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- React Router (`react-router-dom`)
- Vite

## Project Structure

```
paradise-nursery/
├── src/
│   ├── assets/            # background and plant thumbnail images
│   ├── App.jsx            # landing page + route definitions
│   ├── App.css            # landing page & shared navbar styles
│   ├── AboutUs.jsx        # About Us page
│   ├── ProductList.jsx     # product listing page
│   ├── ProductList.css
│   ├── CartItem.jsx        # shopping cart page
│   ├── CartItem.css
│   ├── CartSlice.jsx       # Redux slice for the cart
│   ├── store.js            # Redux store configuration
│   └── main.jsx            # app entry point
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in the terminal.

## Build

```bash
npm run build
```
