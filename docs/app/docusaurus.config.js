// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Devbox',
    tagline: 'Instant, easy, and predictable shells and containers',
    url: 'https://www.jetpack.io',
    baseUrl: '/devbox/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    trailingSlash: true,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'jetpack-io', // Usually your GitHub org/user name.
    projectName: 'devbox', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
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
                    editUrl: "https://github.com/jetpack-io/devbox/tree/main/docs/app/"
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },

                gtag: {
                    trackingID: 'G-PL4J94CXFK',
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {

            logo: {
                alt: 'Devbox',
                src: 'img/devbox_logo_light.svg',
                srcDark: 'img/devbox_logo_dark.svg'
            },
            items: [{
                    type: 'doc',
                    docId: 'index',
                    position: 'right',
                    label: "Docs"
                },
                {
                    href: 'https://discord.gg/agbskCJXk2',
                    // label: 'Discord',
                    className: 'header-discord-link',
                    position: 'right',
                },
                {
                    href: 'https://github.com/jetpack-io/devbox',
                    // label: 'GitHub',
                    className: 'header-github-link',
                    position: 'right',
                },
            ],
        },
        footer: {
            links: [{
                    title: "Jetpack.io",
                    items: [{
                            label: "Jetpack",
                            href: "http://jetpack.io"
                        },
                        {
                            label: "Blog",
                            href: "http://jetpack.io/blog"
                        },
                    ]
                },
                {
                    title: "Devbox",
                    items: [{
                            label: "Home",
                            to: "/"
                        },
                        {
                            label: "Docs",
                            to: "/docs"
                        }
                    ]
                },

                {
                    title: "Community",
                    items: [

                        {
                            label: "Github",
                            href: "https://github.com/jetpack-io"
                        },
                        {
                            label: "Twitter",
                            href: "https://twitter.com/jetpack_io"
                        },
                        {
                            href: 'https://discord.gg/agbskCJXk2',
                            label: 'Discord',
                        },
                        {
                            href: "https://www.youtube.com/channel/UC7FwfJZbunZR2s-jG79vuTQ",
                            label: "Youtube"
                        }
                    ]
                }
            ],
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Jetpack Technologies, Inc.`,
        },
        colorMode: {
            respectPrefersColorScheme: true
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;