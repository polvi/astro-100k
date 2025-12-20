// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://astro-100k.proc.io',
  integrations: [sitemap()],
  adapter: cloudflare({
   workerEntryPoint: {
      path: 'src/worker.ts',
      namedExports: ['handleRequest']
    }
  })
});
