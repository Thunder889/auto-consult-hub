import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import path from 'path';

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
  // Add Vite config for path aliases
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
    // Prevent null byte issues during build
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Ignore certain warnings
          if (warning.code === 'INVALID_ANNOTATION') return;
          warn(warning);
        }
      }
    }
  }
}); 