import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://Leo0114.github.io",
  base: "/ShoppingApp",
  experimental: { assets: true, viewTransitions: true },
  integrations: [tailwind(), preact()],
});
