# 🛍️ AfriVazi E-commerce Platform

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#-features)
3. [Project Structure](#-project-structure)
4. [User Interface](#user-interface)
   - [Design System](#design-system)
   - [Core Components](#core-components)
5. [Component Architecture](#component-architecture)
   - [Page Components](#page-components)
   - [State Management](#state-management)
   - [Routing](#routing)
6. [Development Practices](#development-practices)
   - [Code Organization](#code-organization)
   - [Styling Approach](#styling-approach)
   - [State Management](#state-management-1)
   - [Error Handling](#error-handling)
7. [Installation & Setup](#-installation--setup)

## Project Overview

AfriVazi is a full-stack e-commerce platform for authentic African wear, built with a **Strapi** backend (API) and a **React + TypeScript + Vite** frontend. The project is designed for easy deployment, scalability, and a seamless shopping experience.

Backend repo: [AfriVazi Backend](https://github.com/bridgitkanini/AfriVazi/tree/main/api)

## ✨ Features

- **Product Catalog**: Manage and browse products, categories, and sub-categories.
- **Shopping Cart**: Add, remove, and update products in a persistent cart.
- **Order Management**: Place orders and process payments via Stripe.
- **Admin Panel**: Powerful Strapi admin UI for content and user management.
- **Authentication & Permissions**: Role-based access via Strapi.
- **Responsive Frontend**: Modern, mobile-friendly React UI.
- **API Integration**: Secure, token-based communication between frontend and backend.
- **Deployment Ready**: Guides and configs for Render, PostgreSQL, and Vercel.

---

## 🗂️ Project Structure

```
AfriVazi/
│
├── api/                           # Strapi Backend
│   ├── config/                   # Server configuration
│   │   ├── admin.js             # Admin panel config
│   │   ├── api.js               # API settings
│   │   ├── database.js          # Database configuration
│   │   └── middlewares.js       # Custom middlewares
│   │
│   ├── src/
│   │   ├── admin/               # Admin panel customization
│   │   ├── api/                 # API components
│   │   │   ├── category/        # Category model/controller/routes
│   │   │   ├── order/           # Order processing
│   │   │   ├── product/         # Product management
│   │   │   └── sub-category/    # Sub-category management
│   │   ├── extensions/          # Strapi extensions
│   │   └── index.js             # App entry point
│   │
│   ├── .env                     # Environment variables
│   ├── package.json             # Backend dependencies
│   └── README.md                # API documentation
│
├── client/                      # React Frontend
│   ├── public/                  # Static assets
│   │   └── images/              # Image assets
│   │
│   ├── src/
│   │   ├── assets/              # Static assets
│   │   │   └── image/           # Image assets
│   │   │
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Card/           # Product card component
│   │   │   ├── Cart/           # Shopping cart components
│   │   │   ├── Categories/     # Category navigation
│   │   │   ├── Contact/        # Contact form
│   │   │   ├── FeaturedProducts/ # Featured products section
│   │   │   ├── Footer/         # Site footer
│   │   │   ├── List/           # Product listing
│   │   │   ├── Navbar/         # Navigation bar
│   │   │   └── Slider/         # Image carousel
│   │   │
│   │   ├── hooks/              # Custom React hooks
│   │   │
│   │   ├── pages/              # Application pages
│   │   │   ├── About/         # About page
│   │   │   ├── Contact/       # Contact page
│   │   │   ├── Home/          # Home page
│   │   │   ├── Product/       # Single product view
│   │   │   └── Products/      # Product listing page
│   │   │
│   │   ├── redux/             # State management
│   │   │   ├── cartSlice.js   # Shopping cart state
│   │   │   └── store.js       # Redux store
│   │   │
│   │   ├── App.jsx            # Main App component
│   │   ├── main.jsx           # Application entry point
│   │   └── index.css          # Global styles
│   │
│   ├── .env                   # Frontend environment variables
│   ├── package.json           # Frontend dependencies
│   ├── tailwind.config.js     # Tailwind CSS config
│   └── vite.config.ts         # Vite configuration
│
├── .gitignore                 # Git ignore file
└── README.md                  # Project documentation (this file)
```


## User Interface

### Design System

- **Color Scheme**:
  - Primary: `#2879fe` (blue) - Main brand color
  - Text: `#333` - Main text color
  - Light Text: `#777` - Secondary text
  - Border: `#e0e0e0` - Border color
  - Background: `#f5f5f5` - Light background
  - Error: `#ff4d4f` - Error/validation
  - Success: `#52c41a` - Success messages

### Core Components

1. **Navbar**
   - Responsive navigation with mobile menu
   - Logo and site navigation links
   - Shopping cart icon with item counter
   - Search functionality

2. **Card**
   - Displays product information
   - Product image with hover effects
   - Price and title display
   - Add to cart button

3. **Cart**
   - Shopping cart drawer
   - List of selected products
   - Quantity adjustment
   - Total price calculation

4. **Categories**
   - Category navigation
   - Responsive category menu
   - Active state indicators

5. **FeaturedProducts**
   - Showcase of selected products
   - Responsive grid layout
   - Quick view functionality

6. **Footer**
   - Site navigation links
   - Contact information
   - Social media links
   - Copyright information

7. **Slider**
   - Image carousel for featured content
   - Auto-rotation with manual controls
   - Responsive image display

## Component Architecture

### Page Components

1. **Home Page (`/`)**
   - Hero slider with featured products
   - Categories section
   - Featured products grid
   - Newsletter signup section

2. **Products Page (`/products`)**
   - Product listing with filters
   - Category-based filtering
   - Search functionality
   - Pagination support

3. **Product Detail (`/product/:id`)**
   - Product image gallery
   - Detailed product information
   - Add to cart functionality
   - Related products

4. **About Page (`/about`)**
   - Company information
   - Mission and values
   - Team section

5. **Contact Page (`/contact`)**
   - Contact information
   - Contact form with validation
   - Business hours
   - Location map

### State Management

1. **Redux Store**
   - Cart state management
   - Product state
   - UI state (modals, loading states)

2. **Local State**
   - Form inputs
   - UI interactions
   - Component-specific state

3. **API Integration**
   - Axios for HTTP requests
   - Data fetching and caching
   - Error handling

### Routing

- React Router for client-side navigation
- Protected routes (if authentication is implemented)
- 404 error handling
- Scroll restoration

## Development Practices

### Code Organization

- **Feature-based Structure**: Components grouped by feature
- **Shared Components**: Reusable UI elements in shared directory
- **Type Definitions**: TypeScript interfaces and types
- **API Services**: Centralized API calls with axios

### Styling Approach

- **Tailwind CSS**: Utility-first styling
- **CSS Modules**: Component-scoped styles
- **Responsive Design**: Mobile-first breakpoints
- **Design Tokens**: Consistent spacing, colors, and typography

### State Management

- **Redux Toolkit**: Global state management
- **React Context**: For theme and auth state
- **Local State**: For component-specific state
- **Redux Persist**: For persisting cart and user preferences

### Error Handling

- **API Errors**: Centralized error handling
- **Form Validation**: Client-side validation
- **Error Boundaries**: Graceful error recovery
- **Logging**: Client-side error logging


## 🛠️ Technologies Used

### Frontend
- **React 18** - Frontend library
- **TypeScript** - Type checking
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Material-UI (MUI)** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Stripe.js** - Payment processing
- **Axios** - HTTP client

### Backend
- **Strapi 5** - Headless CMS
- **Node.js** - JavaScript runtime
- **PostgreSQL** - Primary database
- **MySQL** - Alternative database option
- **Stripe** - Payment processing
- **JWT** - Authentication

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

---

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/your-username/afrivazi.git
cd afrivazi
```

### 2. Setup the Backend (API)

```bash
cd api
npm install
# Development mode
npm run develop
# Production build
npm run build && npm start
```

- Configure environment variables in `api/.env` (see below).
- See [`api/DEPLOYMENT_GUIDE.md`](api/DEPLOYMENT_GUIDE.md) for deployment instructions.

### 3. Setup the Frontend (Client)

```bash
cd client
pnpm install  # or npm install
# Development mode
pnpm dev      # or npm run dev
# Production build
pnpm build    # or npm run build
```

- Configure environment variables in `client/.env` (see below).

---

## 🔑 Environment Variables

### Backend (`api/.env`)

| Variable           | Description                          |
| ------------------ | ------------------------------------ |
| `DATABASE_CLIENT`  | `sqlite`, `mysql`, or `postgres`     |
| `DATABASE_URL`     | (Postgres) Full DB connection string |
| `JWT_SECRET`       | JWT secret for API auth              |
| `ADMIN_JWT_SECRET` | JWT secret for admin panel           |
| `API_TOKEN_SALT`   | Salt for API tokens                  |
| `APP_KEYS`         | App keys (comma-separated or array)  |
| `STRIPE_KEY`       | Stripe secret key (for orders)       |
| `CLIENT_URL`       | Frontend URL for payment redirects   |
| `NODE_ENV`         | `development` or `production`        |

See `api/config/database.js` and `api/DEPLOYMENT_GUIDE.md` for details.

### Frontend (`client/.env`)

```env
VITE_API_URL=https://your-api-url.com/api
VITE_API_TOKEN=your-strapi-api-token
VITE_UPLOAD_URL=https://your-api-url.com
```

- `VITE_API_URL`: Base URL for the Strapi API (should end with `/api`)
- `VITE_API_TOKEN`: Strapi API token for public data access
- `VITE_UPLOAD_URL`: Base URL for serving uploaded images/files

---

## 🛠️ Scripts

### Backend (`api/`)

- `npm run develop` — Start Strapi in development mode
- `npm run build` — Build the admin panel
- `npm start` — Start in production mode
- `npm run deploy` — Deploy (see deployment guide)

### Frontend (`client/`)

- `pnpm dev` — Start development server with hot reload
- `pnpm build` — Build for production
- `pnpm preview` — Preview the production build
- `pnpm lint` — Run ESLint on the codebase

---

## 🧩 Main Features & Pages

### Backend

- **Admin Panel**: `/admin` (after running the API)
- **REST API**: `/api/products`, `/api/categories`, `/api/sub-categories`, `/api/orders`
- **Order Payment**: Stripe integration for secure checkout

### Frontend

- **Home** (`/`): Hero slider, featured/trending products, categories, contact
- **Products** (`/products/:id`): Product list with filters and sorting
- **Product** (`/product/:id`): Product details, add to cart
- **Cart**: Accessible from Navbar, shows cart items and checkout button

---

## 🛒 Cart & Checkout

- Cart state is managed with Redux Toolkit and persisted with `redux-persist`.
- Checkout uses Stripe. Update the Stripe public key in `client/src/components/Cart/Cart.jsx` for your own Stripe account.

---

## 🏗️ Deployment

- **Backend**: See [`api/DEPLOYMENT_GUIDE.md`](api/DEPLOYMENT_GUIDE.md) for Render/PostgreSQL setup.
- **Frontend**: Deploy to Vercel, Netlify, or any static hosting. Update `VITE_API_URL` and `VITE_UPLOAD_URL` in your frontend `.env`.

---

## 📝 License

This project is licensed under the [MIT License](https://opensource.org/license/mit).

---

## 📚 Learn More

- [Strapi Documentation](https://docs.strapi.io)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Stripe Docs](https://stripe.com/docs)
- [AfriVazi API Deployment Guide](api/DEPLOYMENT_GUIDE.md)

---