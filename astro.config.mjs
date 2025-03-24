import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable React components in Astro
    react(),
    // Enable Tailwind with v3 options
    tailwind()
  ],
  // Configure server options
  server: {
    port: 3000,
  },
  // Enable static build output
  output: 'static',
}); 