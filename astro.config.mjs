import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://alpine-site.dmea8287-love2.workers.dev',
  integrations: [tailwind()],
});
