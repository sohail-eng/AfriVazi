# 🛍️ AfriVazi API

This is the backend API for the AfriVazi e-commerce platform, built with [Strapi](https://strapi.io/). It manages products, categories, sub-categories, and orders, and provides a secure, extensible REST API for the frontend client.

---

## 🚀 Features

- **Product Management**: CRUD operations for products, including images, price, and categorization.
- **Category & Sub-Category Management**: Organize products into categories and sub-categories.
- **Order Management**: Create and manage orders, with Stripe payment integration.
- **User Authentication & Permissions**: Managed via Strapi's Users & Permissions plugin.
- **Admin Panel**: Powerful admin UI for content management.
- **REST API**: Auto-generated endpoints for all content types.
- **Environment-based configuration**: Easily switch between SQLite, MySQL, and PostgreSQL.

---

## 🗂️ Project Structure

- `src/api/` — Main API logic (controllers, routes, services, content-types)
- `config/` — Environment, database, and middleware configuration
- `public/` — Static assets and uploads
- `types/` — TypeScript type definitions (auto-generated)
- `package.json` — Scripts and dependencies

---

## ⚙️ Setup & Development

### Prerequisites

- **Node.js**: v18.x to v22.x
- **npm**: v6.x or higher
- **Database**: SQLite (default), MySQL, or PostgreSQL

### Install dependencies

```bash
cd api
npm install
```

### Run in development mode

```bash
npm run develop
# or
yarn develop
```

### Build the admin panel

```bash
npm run build
# or
yarn build
```

### Start in production mode

```bash
npm start
# or
yarn start
```

---

## 🔑 Environment Variables

Set these in your `.env` file or deployment environment:

| Variable            | Description                          |
| ------------------- | ------------------------------------ |
| `DATABASE_CLIENT`   | `sqlite`, `mysql`, or `postgres`     |
| `DATABASE_URL`      | (Postgres) Full DB connection string |
| `DATABASE_HOST`     | DB host (for MySQL/Postgres)         |
| `DATABASE_PORT`     | DB port                              |
| `DATABASE_NAME`     | DB name                              |
| `DATABASE_USERNAME` | DB user                              |
| `DATABASE_PASSWORD` | DB password                          |
| `JWT_SECRET`        | JWT secret for API auth              |
| `ADMIN_JWT_SECRET`  | JWT secret for admin panel           |
| `API_TOKEN_SALT`    | Salt for API tokens                  |
| `APP_KEYS`          | App keys (comma-separated or array)  |
| `STRIPE_KEY`        | Stripe secret key (for orders)       |
| `CLIENT_URL`        | Frontend URL for payment redirects   |
| `NODE_ENV`          | `development` or `production`        |

See `config/database.js` and `DEPLOYMENT_GUIDE.md` for more details.

---

## 🛡️ Authentication & Security

- **Admin Panel**: Protected by JWT (`ADMIN_JWT_SECRET`).
- **API**: Uses Strapi's Users & Permissions plugin for role-based access.
- **API Tokens**: Can be generated for programmatic access.
- **CORS, Security, and Error Handling**: Configured in `config/middlewares.js`.
- **Stripe**: Used for secure payment processing in orders.

---

## 📦 API Endpoints

Strapi auto-generates REST endpoints for each collection type. The main endpoints are:

### Products

- `GET    /api/products` — List products
- `GET    /api/products/:id` — Get product by ID
- `POST   /api/products` — Create product
- `PUT    /api/products/:id` — Update product
- `DELETE /api/products/:id` — Delete product

### Categories

- `GET    /api/categories`
- `GET    /api/categories/:id`
- `POST   /api/categories`
- `PUT    /api/categories/:id`
- `DELETE /api/categories/:id`

### Sub-Categories

- `GET    /api/sub-categories`
- `GET    /api/sub-categories/:id`
- `POST   /api/sub-categories`
- `PUT    /api/sub-categories/:id`
- `DELETE /api/sub-categories/:id`

### Orders

- `GET    /api/orders`
- `GET    /api/orders/:id`
- `POST   /api/orders` — Creates an order and Stripe checkout session

> **Note:** Some endpoints may require authentication or specific permissions. See the Strapi admin panel to configure roles and permissions.

---

## 💳 Stripe Integration

Order creation (`POST /api/orders`) triggers a Stripe Checkout session. Set `STRIPE_KEY` and `CLIENT_URL` in your environment.

---

## 🛠️ Deployment

See [`DEPLOYMENT_GUIDE.md`](./DEPLOYMENT_GUIDE.md) for full instructions, including:

- Deploying to [Render](https://render.com)
- Database setup (PostgreSQL recommended for production)
- Environment variable configuration
- Importing/exporting data
- Updating frontend API URLs

---

## 🐞 Troubleshooting

- **Database errors**: Check your `DATABASE_URL` and credentials.
- **CORS issues**: Adjust settings in `config/middlewares.js`.
- **Build failures**: Ensure Node.js version matches requirements.
- **Import/export issues**: See `DEPLOYMENT_GUIDE.md` for large file handling.

---

## 📚 Learn More

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi Tutorials](https://strapi.io/tutorials)
- [Strapi Community](https://forum.strapi.io/)

---

## 📝 License

This project is licensed under the MIT License.

---

> For questions or contributions, please open an issue or pull request!
