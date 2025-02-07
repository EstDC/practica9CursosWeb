import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true
  },
  integrations: [
  react(), tailwind()],
});