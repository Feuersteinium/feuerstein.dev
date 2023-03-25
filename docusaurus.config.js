// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'feuerstein.dev',
  tagline: 'Based on quantum technology :D',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://feuerstein.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'feuerstein.dev', // Usually your GitHub org/user name.
  // projectName: 'feuerstein.dev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/einfeuerstein/feuerstein.dev/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/einfeuerstein/feuerstein.dev',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Feuerstein',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/docs', label: 'Docs', position: 'left'},
          {to: '/docs', label: 'Science & Education', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Docs',
                to: '/docs/',
              },
              {
                label: 'Education & Science',
                to: '/404',
              },
            ],
          },
          {
            title: 'Me on the Internet',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/einfeuerstein',
              },
              {
                label: 'Mastodon',
                href: 'https://mastodon.online/@feuerstein',
              },
              {
                label: 'Matrix',
                href: 'https://matrix.to/#/@process0815:matrix.org',
              },
              {
                label: 'E-Mail',
                href: 'mailto:contact@feuerstein.dev',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Code of this page',
                href: 'https://github.com/einfeuerstein/feuerstein.dev/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} feuerstein.dev. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
