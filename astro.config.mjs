import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import path from 'path';

import node from '@astrojs/node';

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
  output: 'server',

  // Add Vite config for path aliases
  vite: {
   
  },

  adapter: node({
    mode: 'standalone'
  })
});