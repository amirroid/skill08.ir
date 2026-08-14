import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // SPA fallback: serve index.html for all routes in dev and preview
  appType: 'spa',
  server: {
    port: 3000,
    open: false,
  },
  preview: {
    port: 4173,
  },
});
