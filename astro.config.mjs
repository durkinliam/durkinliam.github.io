import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://durkinliam.github.io',
    integrations: [tailwind()]
});