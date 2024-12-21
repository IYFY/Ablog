// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://musical-donut-d00741.netlify.app",
  integrations: [preact()]
});