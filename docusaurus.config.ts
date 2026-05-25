import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Agentic AI Foundation',
  tagline: 'Nền tảng Agentic Engineering: agent, context, tool protocols, multi-agent systems, evaluation, security và governance',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
    faster: true,
  },

  url: 'https://tuandung222.github.io',
  baseUrl: '/agentic-ai-foundation/',
  organizationName: 'tuandung222',
  projectName: 'agentic-ai-foundation',
  trailingSlash: false,
  onBrokenLinks: 'warn',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'noindex,nofollow,noarchive,nosnippet',
      },
    },
  ],

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
    localeConfigs: {
      vi: {label: 'Tiếng Việt', htmlLang: 'vi-VN'},
    },
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/tuandung222/agentic-ai-foundation/edit/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: false,
          numberPrefixParser: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'vi'],
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
    navbar: {
      title: 'Agentic AI Foundation',
      logo: {
        alt: 'Agentic AI Foundation Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'lectureSidebar',
          position: 'left',
          label: 'Bài giảng',
        },
        {
          to: '/docs/06-agent-ready-repositories/01-overview',
          label: 'Playbook',
          position: 'left',
        },
        {
          to: '/docs/resources/glossary',
          label: 'Thuật ngữ',
          position: 'left',
        },
        {
          href: 'https://github.com/tuandung222/agentic-ai-foundation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Trục nội dung',
          items: [
            {label: 'Mental Model', to: '/docs/00-mental-model/01-overview'},
            {label: 'Context Engineering', to: '/docs/02-context-engineering/01-overview'},
            {label: 'MCP', to: '/docs/03-mcp-tool-protocols/01-overview'},
            {label: 'Security', to: '/docs/08-security-governance/01-overview'},
          ],
        },
        {
          title: 'Tài nguyên',
          items: [
            {label: 'Glossary', to: '/docs/resources/glossary'},
            {label: 'Maturity Matrix', to: '/docs/resources/maturity-matrix'},
            {label: 'Checklists', to: '/docs/resources/checklists'},
            {label: 'Agentic Map', to: '/docs/resources/agentic-engineering-map'},
          ],
        },
      ],
      copyright: `Bản quyền © ${new Date().getFullYear()} Agentic AI Foundation. Nội dung đang được biên soạn.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash', 'json', 'typescript', 'yaml', 'python', 'markdown', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
