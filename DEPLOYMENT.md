# Vercel Deployment Guide

This guide explains how to deploy the EmailBuilder.js project to Vercel.

## Prerequisites

- A Vercel account ([sign up here](https://vercel.com/signup))
- Git repository connected to GitHub, GitLab, or Bitbucket

## Deployment Steps

### 1. Connect Your Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your Git repository
4. Vercel will automatically detect this as a monorepo

### 2. Configure Project Settings

The project is already configured with the following files:

- **`vercel.json`**: Main configuration file
- **`.vercelignore`**: Files to ignore during deployment
- **Updated `vite.config.ts`**: Optimized for Vercel deployment

### 3. Build Configuration

The deployment uses these settings:

- **Root Directory**: `/` (project root)
- **Build Command**: `cd packages/editor-sample && npm run build`
- **Output Directory**: `packages/editor-sample/dist`
- **Install Command**: `npm ci && cd packages/editor-sample && npm ci`

### 4. Environment Variables

No environment variables are required for basic deployment. The application will work out of the box.

### 5. Deploy

1. Click "Deploy" in the Vercel dashboard
2. Vercel will automatically:
   - Install dependencies for the root project
   - Install dependencies for the editor-sample package
   - Build the Vite application
   - Deploy the static files

## Project Structure

The deployment focuses on the `packages/editor-sample` package, which contains:

- **React Application**: The main email builder interface
- **Vite Build**: Optimized for production
- **Static Assets**: All necessary CSS, JS, and image files

## Custom Domain (Optional)

To add a custom domain:

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your domain
4. Configure DNS records as instructed

## Troubleshooting

### Build Failures

If the build fails:

1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are properly installed
3. Verify the `vercel.json` configuration

### Asset Loading Issues

If assets don't load properly:

1. Check the `base` configuration in `vite.config.ts`
2. Ensure the output directory is correctly set
3. Verify the routing configuration in `vercel.json`

## Local Testing

To test the build locally:

```bash
# Install dependencies
npm ci
cd packages/editor-sample
npm ci

# Build the application
npm run build

# Preview the build
npm run preview
```

## Performance Optimization

The Vercel configuration includes:

- **Static Build**: Optimized for fast loading
- **Asset Optimization**: Automatic compression and optimization
- **CDN Distribution**: Global content delivery
- **Automatic HTTPS**: Secure connections

## Support

For issues with deployment:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review the build logs
3. Test locally first to isolate issues
