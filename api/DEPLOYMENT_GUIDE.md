# AfriVazi API Deployment Guide - MySQL to PostgreSQL Migration

## Prerequisites

- GitHub repository connected to Render
- Export file from local MySQL Strapi: `export_20250712014414.tar.gz.enc`

## ⚠️ Important: Large File Handling

The Strapi export files are large (~220MB) and cannot be pushed to GitHub. Here are your options:

### Option A: Manual Import (Recommended)

1. **Keep export files locally** (don't commit to GitHub)
2. **Deploy empty Strapi** to Render first
3. **Import data manually** through Strapi admin panel

### Option B: Use Git LFS (Advanced)

If you need version control for export files:

```bash
git lfs install
git lfs track "*.tar.gz.enc"
git add .gitattributes
```

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

# Strapi Security Keys (use the generated values below)
JWT_SECRET=5084fb3f6d8dfe60c44002ab00637edf84c32bda5015aadd4b2035d329072a9016d860a8c775228e893da4193703dbb09a3c53d4ad63b53df1ec9aa60f0d50d4
ADMIN_JWT_SECRET=359058cb573164211d24662a18579c40476175960bebdb42cf4bda6acdae0b5c8713e1b1b2ca245cd1eb9d70e21a0d3ae37a2a9f24d21766b8e54abbd3ee271b
API_TOKEN_SALT=9a975062e383eaecd8dad07ba51756f148afac649a0daefdd63cf0a4a9b40072b816f351e642e1020efae88f234989debf9dab3a1713edab919a3e41bc493304
APP_KEYS=7a0b51e4bde5eedfbbf2bd481584ad79532a93017b882940163017641853400b482af4e2ca80a41b96aab3c8bee12e4a65d1cb16b943957ce601f39c4d4706b6

# Environment
NODE_ENV=production
```

## Step 2: Deploy and Import Data

### 2.1 Initial Deployment

1. Deploy the service (it will start with empty database)
2. Note the service URL (e.g., `https://afrivazi-api.onrender.com`)

### 2.2 Import Your Data (Option A - Manual)

1. **Access Strapi Admin**: Go to `https://afrivazi-api.onrender.com/admin`
2. **Create admin account** (first time setup)
3. **Re-create content types** manually:
   - Categories
   - Sub-categories
   - Products
   - Orders
4. **Add your data** through the admin interface

### 2.3 Import Your Data (Option B - Export File)

If you have the export file locally:

1. **Access Strapi Admin**: Go to `https://afrivazi-api.onrender.com/admin`
2. **Go to Settings** → **Import/Export**
3. **Upload your export file**: `export_20250712014414.tar.gz.enc`
4. **Enter your encryption key** when prompted

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

## File Management

- **Export files are large** (~220MB) and should not be committed to Git
- **Use .gitignore** to prevent accidental commits
- **Keep exports locally** for manual imports
- **Consider Git LFS** if you need version control for exports
