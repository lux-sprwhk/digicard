import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteImagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    globals: true,
  },
  plugins: [
    react(),
    viteImagemin({
      pngquant: {
        quality: [0.6, 0.8],
        speed: 4,
      },
      mozjpeg: {
        quality: 85,
      },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.beehiiv.com/v2',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
