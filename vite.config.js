import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/ArtefactsCollection/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets')
    },
  },
});
