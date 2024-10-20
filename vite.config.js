import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProduction ? '/portfolio/' : '/',
  plugins: [svgr(), react()],
  server: {
    open: true,
    port: 3000,
  },
});
