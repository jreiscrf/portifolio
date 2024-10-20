import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProduction ? '/portifolio/' : '/',
  plugins: [svgr(), react()],
  server: {
    open: true,
    port: 3000,
  },
});
