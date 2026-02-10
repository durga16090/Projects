# Green Power Tech - Digital Product Catalog

A professional, interactive digital catalog website for Green Power Tech, featuring renewable energy products. Designed specifically for dealers to showcase products to customers in a professional manner.

## Features

- **Interactive Product Catalog**: Browse, search, and filter products
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Dark/Light Mode**: Toggle between color schemes
- **Product Details**: Detailed information with specifications, features, and applications
- **Dealer-Focused**: Professional presentation suitable for business use
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and structure

## Tech Stack

- **Frontend**: React.js
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Build Tool**: Vite

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── components/     # Reusable components
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/          # Page components
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── data/           # Product data
│   └── products.js
├── assets/         # Static assets
│   ├── icons.jsx
│   └── green-power-logo.svg
└── App.jsx         # Main application component
```

## Key Functionality

- **Product Filtering**: Filter products by category and search
- **View Modes**: Grid and list views for products
- **Detailed Product Pages**: Specifications, features, and applications
- **Contact Form**: Functional contact form with validation
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- **Dark Mode Toggle**: User preference for light/dark theme

## Deployment

This project is ready for deployment on platforms like Netlify, Vercel, or any static hosting service.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)