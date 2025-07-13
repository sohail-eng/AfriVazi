# 🛍️ AfriVazi E-commerce Platform

AfriVazi is a full-stack e-commerce platform for authentic African wear, built with a **Strapi** backend (API) and a **React + TypeScript + Vite** frontend. The project is designed for easy deployment, scalability, and a seamless shopping experience.

---

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
  api/      # Strapi backend (Node.js, REST API, admin panel)
  client/   # React frontend (TypeScript, Vite, Redux, Stripe)
  README.md # Project overview (this file)
```

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

This project is licensed under the MIT License.

---

## 📚 Learn More

- [Strapi Documentation](https://docs.strapi.io)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Stripe Docs](https://stripe.com/docs)
- [AfriVazi API Deployment Guide](api/DEPLOYMENT_GUIDE.md)

---