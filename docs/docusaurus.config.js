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
      locales: ['en', 'ru', 'fr', 'de', 'es', 'ko', 'ja', 'zh-cn'],
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
              label: 'Documentation',
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
            {
              title: 'Documentation',
              items: [
                {
                  label: 'About',
                  to: '/docs/about',
                },
                {
                  label: 'Features',
                  to: '/docs/features',
                },
                {
                  label: 'Hooks',
                  to: '/docs/hooks/state/use-modal-state',
                },
                {
                  label: 'Changelog',
                  to: '/docs/changelog',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Issues',
                  href: 'https://github.com/IOINITID/react-hooks-kit/issues',
                },
                {
                  label: 'Pull requests',
                  href: 'https://github.com/IOINITID/react-hooks-kit/pulls',
                },
                {
                  label: 'Source',
                  href: 'https://github.com/IOINITID/react-hooks-kit',
                },
              ],
            },
            {
              title: 'Social',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/IOINITID/react-hooks-kit',
                },
              ],
            },
            {
              title: 'Built with',
              items: [
                {
                  label: 'Docusaurus',
                  href: 'https://docusaurus.io',
                },
                {
                  label: 'GitHub Pages',
                  href: 'https://pages.github.com',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} React Hooks Kit.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
