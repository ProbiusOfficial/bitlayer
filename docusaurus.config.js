// @ts-check
// Import the necessary modules and settings for the Docusaurus configuration
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bitlayer',
  tagline: 'The 1st Bitcoin security equivalent layer2 solution based on BitVM approach',
  favicon: 'img/bitlayer-favicon.ico',

  // Actual Bitlayer production URL
  url: 'https://www.bitlayer.org',
  baseUrl: '/',

  // Bitlayer GitHub organization and project repository configuration
  organizationName: 'bitlayer-org', // Your GitHub org/user name.
  projectName: 'bitlayer', // Your repo name.

  onBrokenLinks: 'ignore', //throw -> ignore
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/bitlayer-org/bitlayer/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/bitlayer-org/bitlayer/blog/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg', // 等待素材
    navbar: {
      title: 'Bitlayer',
      logo: {
        alt: 'Bitlayer Logo',
        src: 'img/logo.svg', // 等待素材
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/bitlayer-org',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Bitlayer Docs',
              to: '/docs/about/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/BitLayerLabs',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/bitlayernews',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@Bitlayer',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/bitlayer-org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bitlayer. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
