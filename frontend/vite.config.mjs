import { defineConfig } from 'vite';

export default defineConfig({
  base: '/my_first_repo/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
});
