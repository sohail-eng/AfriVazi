# 🛍️ AfriVazi Frontend

This is the frontend for the AfriVazi e-commerce platform, built with **React**, **TypeScript**, and **Vite**. It provides a modern, responsive shopping experience for users, integrating with the AfriVazi Strapi API backend.

---

## 🚀 Features

- **Home Page**: Hero slider, featured products, trending products, categories, and contact section.
- **Product Listing**: Filter and sort products by sub-category and price.
- **Product Details**: View product images, details, and add to cart.
- **Shopping Cart**: Add, remove, and update products in cart. Cart state is persisted.
- **Checkout**: Stripe integration for secure payments.
- **Responsive Design**: Works on desktop and mobile.
- **Redux Toolkit**: State management for cart.
- **API Integration**: Fetches data from the AfriVazi Strapi backend.

---

## 🗂️ Project Structure

- `src/`
  - `components/` — Reusable UI components (Navbar, Footer, Cart, Card, etc.)
  - `pages/` — Main pages (Home, Products, Product)
  - `redux/` — Redux store and cart reducer
  - `hooks/` — Custom hooks (e.g., `useFetch`)
  - `assets/` — Images and static assets
  - `app.scss`, `index.css` — Global styles
  - `makeRequest.js` — Axios instance for API calls

---

## ⚙️ Setup & Development

### Prerequisites

- **Node.js**: v18.x or higher
- **npm** or **pnpm** (recommended)

### Install dependencies

```bash
cd client
pnpm install
# or
npm install
```

### Run in development mode

```bash
pnpm dev
# or
npm run dev
```

### Build for production

```bash
pnpm build
# or
npm run build
```

### Preview production build

```bash
pnpm preview
# or
npm run preview
```

---

## 🔑 Environment Variables

Create a `.env` file in the `client` directory with the following variables:

```env
VITE_API_URL=https://your-api-url.com/api
VITE_API_TOKEN=your-strapi-api-token
VITE_UPLOAD_URL=https://your-api-url.com
```

- `VITE_API_URL`: Base URL for the Strapi API (should end with `/api`)
- `VITE_API_TOKEN`: Strapi API token for public data access
- `VITE_UPLOAD_URL`: Base URL for serving uploaded images/files

> **Note:** Never commit your `.env` file to version control.

---

## 🛠️ Scripts

- `dev` — Start development server with hot reload
- `build` — Build for production
- `preview` — Preview the production build
- `lint` — Run ESLint on the codebase

---

## 🧩 Main Pages & Components

- **Home** (`/`): Slider, featured/trending products, categories, contact
- **Products** (`/products/:id`): Product list with filters and sorting
- **Product** (`/product/:id`): Product details, add to cart
- **Cart**: Accessible from Navbar, shows cart items and checkout button

---

## 🛒 Cart & Checkout

- Cart state is managed with Redux Toolkit and persisted with `redux-persist`.
- Checkout uses Stripe. You may need to update the Stripe public key in `Cart.jsx` for your own Stripe account.

---

## 🧑‍💻 Development Notes

- **Styling**: Uses SCSS and Tailwind CSS for styling.
- **Routing**: Uses React Router v6.
- **API Calls**: All API requests use the `makeRequest` Axios instance, which injects the API URL and token from environment variables.
- **TypeScript**: The project is fully typed for safety and maintainability.

---

## 📝 License

This project is licensed under the MIT License.

---

> For questions or contributions, please open an issue or pull request!
