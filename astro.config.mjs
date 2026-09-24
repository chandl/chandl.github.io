// @ts-check
import { defineConfig } from 'astro/config';

// Old blog posts moved to stacktracing.com — keep inbound links working.
const legacyPosts = [
  'install-docker-on-oracle-linux',
  'healthcare-data-visualization',
  'jellyfin-with-docker-compose',
  'ravens-progressive-matrices-ai',
  'real-time-streaming-protocol',
  'test-driven-development',
  'wifi-hacking-with-aircrack-ng',
];

export default defineConfig({
  site: 'https://chandl.io',
  redirects: Object.fromEntries(
    legacyPosts.map((slug) => [`/${slug}`, `https://stacktracing.com/${slug}`]),
  ),
  build: { inlineStylesheets: 'always' },
});
