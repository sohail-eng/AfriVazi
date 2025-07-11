# AfriVazi API Deployment Guide - MySQL to PostgreSQL Migration

## Prerequisites

- GitHub repository connected to Render
- Export file from local MySQL Strapi: `export_20250712014414.tar.gz.enc`

## Step 1: Deploy to Render

### 1.1 Create Web Service

1. Go to [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Set **Root Directory** to `api`

### 1.2 Configure Service

- **Name**: `afrivazi-api`
- **Environment**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`

### 1.3 Add PostgreSQL Database

1. Go to "New" → "PostgreSQL"
2. Name: `afrivazi-db`
3. Copy the connection string (you'll need this for DATABASE_URL)

### 1.4 Set Environment Variables

Add these environment variables in your web service settings:

```bash
# Database Configuration
DATABASE_CLIENT=postgres
DATABASE_URL=your-postgres-connection-string-from-render

# Strapi Required Variables (generate these)
JWT_SECRET=your-long-random-string-here
ADMIN_JWT_SECRET=your-long-random-string-here
API_TOKEN_SALT=your-long-random-string-here
APP_KEYS=your-long-random-string-here

# Environment
NODE_ENV=production
```

## Step 2: Deploy and Import Data

### 2.1 Initial Deployment

1. Deploy the service (it will fail initially due to empty database)
2. Note the service URL (e.g., `https://afrivazi-api.onrender.com`)

### 2.2 Import Your Data

1. Download the export file: `export_20250712014414.tar.gz.enc`
2. Upload it to your Render service using the Strapi admin panel
3. Or use the Strapi CLI to import:

```bash
# In your local api directory
npm run strapi import -- -f export_20250712014414.tar.gz.enc
```

## Step 3: Update Frontend Configuration

### 3.1 Update API Base URL

In your frontend code (`client/src/makeRequest.js` or similar), update the base URL:

```javascript
// Change from localhost to your Render URL
const baseURL = "https://afrivazi-api.onrender.com";
```

### 3.2 Update Environment Variables

If you're using environment variables in your frontend, update them to point to the new API.

## Step 4: Verify Deployment

### 4.1 Check API Health

- Visit: `https://afrivazi-api.onrender.com/admin`
- Login with your Strapi admin credentials
- Verify all content types and data are present

### 4.2 Test Frontend Integration

- Deploy your frontend to Vercel
- Test that it can fetch data from the new API
- Verify all functionality works correctly

## Troubleshooting

### Common Issues:

1. **Database Connection Errors**: Check DATABASE_URL format
2. **Import Failures**: Ensure export file is accessible
3. **CORS Issues**: Configure CORS in Strapi settings
4. **Build Failures**: Check Node.js version compatibility

### Useful Commands:

```bash
# Check Strapi logs
npm run strapi logs

# Access Strapi console
npm run strapi console

# Rebuild the application
npm run build
```

## Security Notes

- Keep your JWT secrets secure
- Use HTTPS in production
- Regularly backup your PostgreSQL database
- Monitor your Render service usage

## Cost Optimization

- Render's free tier includes PostgreSQL
- Monitor usage to avoid unexpected charges
- Consider upgrading only when needed
