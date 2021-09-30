const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'React Hooks Kit',
    tagline: 'Set of useful functions for working with the React application',
    url: 'https://ioinitid.github.io',
    baseUrl: '/react-hooks-kit/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'IOINITID', // Usually your GitHub org/user name.
    projectName: 'react-hooks-kit', // Usually your repo name.

    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ru', 'fr', 'de', 'es'],
    },

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
        navbar: {
          title: 'React Hooks Kit',
          logo: {
            alt: 'React Hooks Kit logo',
            src: 'img/react-hooks-kit-logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'about',
              position: 'right',
              label: 'Docs',
            },
            {
              type: 'localeDropdown',
              position: 'right',
            },
            // {
            //   to: '/blog',
            //   label: 'Blog',
            //   position: 'right',
            // },
            {
              href: 'https://github.com/IOINITID/react-hooks-kit',
              // label: 'GitHub',
              position: 'right',
              className: 'header-github-link',
              'aria-label': 'GitHub repository',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            // {
            //   title: 'Docs',
            //   items: [
            //     {
            //       label: 'Tutorial',
            //       to: '/docs/intro',
            //     },
            //   ],
            // },
            // {
            //   title: 'Community',
            //   items: [
            //     // {
            //     //   label: 'Stack Overflow',
            //     //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //     // },
            //     // {
            //     //   label: 'Discord',
            //     //   href: 'https://discordapp.com/invite/docusaurus',
            //     // },
            //     // {
            //     //   label: 'Twitter',
            //     //   href: 'https://twitter.com/docusaurus',
            //     // },
            //   ],
            // },
            // {
            //   title: 'More',
            //   items: [
            //     // {
            //     //   label: 'Blog',
            //     //   to: '/blog',
            //     // },
            //     {
            //       label: 'GitHub',
            //       href: 'https://github.com/facebook/docusaurus',
            //     },
            //   ],
            // },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} React Hooks Kit. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
