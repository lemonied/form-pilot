import { defineConfig } from 'dumi';

const BASE_PATH = '/form-pilot/';

export default defineConfig({
  outputPath: 'docs-dist',
  base: BASE_PATH,
  publicPath: BASE_PATH,
  scripts: process.env.SCAN === '1' ? [
    'https://unpkg.com/react-scan/dist/auto.global.js',
  ] : undefined,
  themeConfig: {
    logo: false,
    editLink: false,
    footer: false,
    name: 'FormPilot',
    nav: [],
    socialLinks: {
      github: 'https://github.com/lemonied/form-pilot',
    },
  },
});
