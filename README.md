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
7. [Quick Start & Installation](#-quick-start--installation)

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

## 🚀 Quick Start & Installation

### Prerequisites

- Node.js (v18 or later)
- npm (v8 or later)
- MySQL Server (v8.0 or later) or PostgreSQL (v12 or later)
- MySQL Workbench (recommended) or another database management tool

### 1. Clone the Repository

```bash
git clone https://github.com/bridgitkanini/AfriVazi.git
cd AfriVazi
```

### 2. Setup the Backend (API)

```bash
cd api
npm install
```

#### Database Setup

1. **Create a MySQL Database**

   - Open MySQL Workbench
   - Connect to your local MySQL server
   - Create a new database:
     ```sql
     CREATE DATABASE strapi_afrivazi;
     ```
   - Create a database user (replace with a strong password):
     ```sql
     CREATE USER 'afrivazi_user'@'localhost' IDENTIFIED BY 'your_secure_password';
     GRANT ALL PRIVILEGES ON strapi_afrivazi.* TO 'afrivazi_user'@'localhost';
     FLUSH PRIVILEGES;
     ```

2. **Configure Environment Variables**
   Create a `.env` file in the `api` directory with:

   ```env
   # Database
   DATABASE_CLIENT=mysql
   DATABASE_HOST=127.0.0.1
   DATABASE_PORT=3306
   DATABASE_NAME=strapi_afrivazi
   DATABASE_USERNAME=afrivazi_user
   DATABASE_PASSWORD=your_secure_password

   # App
   HOST=0.0.0.0
   PORT=1337
   NODE_ENV=development

   # Security
   JWT_SECRET=your_jwt_secret
   ADMIN_JWT_SECRET=your_admin_jwt_secret
   API_TOKEN_SALT=your_api_token_salt
   ```

3. **Install Dependencies**

   ```bash
   npm install mysql2 --save
   ```

4. **Start the Backend**

   ```bash
   # Development mode
   npm run develop

   # Or for production
   # npm run build && npm start
   ```

   - Admin panel: http://localhost:1337/admin
   - API: http://localhost:1337/api

### 3. Setup the Frontend (Client)

```bash
cd ../client
pnpm install  # or npm install
```

1. **Configure Environment Variables**
   Create a `.env` file in the `client` directory:

   ```env
   VITE_API_URL=http://localhost:1337/api
   VITE_UPLOAD_URL=http://localhost:1337
   VITE_API_TOKEN=your_strapi_api_token  # Get from Strapi Settings > API Tokens
   ```

2. **Start the Development Server**

   ```bash
   # Development mode
   pnpm dev  # or npm run dev

   # Production build
   # pnpm build
   # pnpm preview
   ```

   - Frontend: http://localhost:5173

### 4. Initial Setup in Strapi Admin

1. Visit http://localhost:1337/admin
2. Create your admin account
3. Go to Settings > API Tokens
4. Create a new API Token with full access
5. Update the `VITE_API_TOKEN` in your client's `.env` file

### Troubleshooting

- **MySQL Connection Issues**:

  - Ensure MySQL server is running
  - Verify database credentials in `.env`
  - Check database user permissions
  - Try using `127.0.0.1` instead of `localhost`

- **Port Conflicts**:

  - Strapi: 1337 (API) and 1338 (Admin)
  - Vite: 5173 (Frontend)
  - Update ports in respective `.env` files if needed

- **API Token Issues**:
  - Regenerate the token in Strapi admin
  - Ensure the token has correct permissions
  - Restart the frontend after updating the token

For deployment instructions, see [Deployment Guide](api/DEPLOYMENT_GUIDE.md).

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
