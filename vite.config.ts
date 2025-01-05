import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        main: './src/resume.html',
      }
    },
  },
  server: {
    open: './src/resume.html'
  }
});