/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rookedsysc\'s docs',
  tagline: 'Study Dart, Flutter, Swift, SwiftUI and other things',
  url: 'https://blog.rookedsysc.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rookedsysc', // Usually your GitHub org/user name.
  projectName: 'rookedsaurusc', // Usually your repo name.
  deploymentBranch: 'main',

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
            'https://github.com/rookedsysc/rookedsaurusc/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rookedsysc/rookedsaurusc/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'kr'],
  },

  // Local Search Plugin
  // themes: [
  //   [
  //     "@easyops-cn/docusaurus-search-local",
  //     /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
  //     ({
  //       hashed: true,
  //       language: ["en"],
  //       highlightSearchTermsOnTargetPage: true,
  //       explicitSearchResultPath: true,
  //     }),
  //   ],
  // ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'XZ3Y6KJN6W',
        apiKey: '16a2f01a72e439b2c26ebf79aa451c26',
        indexName: 'docusaurus-2',
      },
      navbar: {
        title: 'Rookedsysc\'s docs',
        logo: {
          alt: 'My Meta Project Logo',
          src: 'img/logo.svg',
        },
        items: [
          // flutter sidebar
          {
            type: 'doc',
            docId: 'flutter/what-is-flutter',
            position: 'left',
            label: 'Flutter',
            sidebarId: 'flutter',
          },

          // tutorial sidebar
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
            sidebarId: 'tutorial',
          },

          { to: 'blog', label: 'Blog', position: 'right' },
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/rookedsysc/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      liveCodeBlock: {
        /**
        * live playground 위치를 에디터의 위 또는 아래로 설정합니다.
        * 설정할 수 있는 값: "top" | "bottom"
        */
        playgroundPosition: 'bottom',
      },
      
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Learn',
        //     items: [
        //       {
        //         label: 'Style Guide',
        //         to: 'docs/',
        //       },
        //       {
        //         label: 'Second Doc',
        //         to: 'docs/doc2',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: 'blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/rookedsysc/rookedsysc_saurus.github.io',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Legal',
        //     // Please do not remove the privacy and terms, it's a legal requirement.
        //     items: [
        //       {
        //         label: 'Privacy',
        //         href: 'https://opensource.fb.com/legal/privacy/',
        //       },
        //       {
        //         label: 'Terms',
        //         href: 'https://opensource.fb.com/legal/terms/',
        //       },
        //       {
        //         label: 'Data Policy',
        //         href: 'https://opensource.fb.com/legal/data-policy/',
        //       },
        //       {
        //         label: 'Cookie Policy',
        //         href: 'https://opensource.fb.com/legal/cookie-policy/',
        //       },
        //     ],
        //   },
        // ],
        logo: {
          alt: 'Meta Open Source Logo',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
          src: '/img/meta_opensource_logo_negative.svg',
          href: 'https://opensource.fb.com',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Meta Platforms, Inc. Built with Docusaurus.`,
      },
      // code block 언어 추가
      prism: {
        theme: require('prism-react-renderer/themes/vsDark'),
        additionalLanguages: ['dart', 'bash'],
      },
      plugins: ['@docusaurus/theme-live-codeblock'],
    }),

};

module.exports = config;
