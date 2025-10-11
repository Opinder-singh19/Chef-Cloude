import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/chef-cloud-project/', // Important for GitHub Pages
  plugins: [react()],
});

