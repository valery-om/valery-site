import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://valery.omlab.club',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
