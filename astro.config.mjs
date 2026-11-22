// @ts-check
import { defineConfig } from 'astro/config';

// User site: https://manan2107bhavsar.github.io (repo: Manan2107Bhavsar/manan2107bhavsar.github.io)
export default defineConfig({
  site: 'https://manan2107bhavsar.github.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
