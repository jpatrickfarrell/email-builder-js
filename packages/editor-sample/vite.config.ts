import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  base: process.env.NODE_ENV === 'production' ? '/' : '/email-builder-js/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Group React and React DOM together
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }
          // Group Material-UI components
          if (id.includes('@mui')) {
            return 'mui';
          }
          // Group Emotion separately to avoid conflicts
          if (id.includes('@emotion')) {
            return 'emotion';
          }
          // Group other node_modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled'],
  },
  define: {
    global: 'globalThis',
  },
});
