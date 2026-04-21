import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/resume-intelligence-hub-site/',
  title: 'Resume Intelligence Hub',
  titleTemplate: ':title | Resume Intelligence Hub',

  sitemap: {
    hostname: 'https://zenine.github.io/resume-intelligence-hub-site/',
  },

  head: [
    ['link', { rel: 'icon', href: '/resume-intelligence-hub-site/hero.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { name: 'google-site-verification', content: 'JDAD7_0Djk8ErI3P93dZ2nq5ZKrVGxEi6c7eM7xt-IM' }],
    // Open Graph / Twitter — site-wide static
    ['meta', { property: 'og:site_name', content: 'Resume Intelligence Hub' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://zenine.github.io/resume-intelligence-hub-site/og.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://zenine.github.io/resume-intelligence-hub-site/og.png' }],
    // GEO hints: llms.txt discovery
    ['link', { rel: 'alternate', type: 'text/plain', title: 'llms.txt', href: 'https://zenine.github.io/resume-intelligence-hub-site/llms.txt' }],
    ['link', { rel: 'alternate', type: 'text/plain', title: 'llms-full.txt', href: 'https://zenine.github.io/resume-intelligence-hub-site/llms-full.txt' }],
    // JSON-LD structured data (GEO) — helps AI search engines (Perplexity,
    // SearchGPT, Google AI Overview) identify this as a software / skill.
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Resume Intelligence Hub',
        description:
          'An AI-agent skill that bootstraps a personal career intelligence hub — a private Git repo that is both a single source of truth (resumes, interview prep, grant applications, pre-submission verification) and a career compass (stretch target, capability gap, quarterly plan).',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Cross-platform',
        url: 'https://zenine.github.io/resume-intelligence-hub-site/',
        image: 'https://zenine.github.io/resume-intelligence-hub-site/og.png',
        author: {
          '@type': 'Person',
          name: 'Zenine Xu',
        },
        license: 'https://github.com/Zenine/resume-intelligence-hub-site/blob/main/LICENSE',
        codeRepository: 'https://github.com/Zenine/resume-intelligence-hub',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        keywords: [
          'resume',
          'career intelligence',
          'career compass',
          'gap analysis',
          'interview prep',
          'JD-tailored resume',
          'grant application',
          'AI agent skill',
          'Claude Code',
          'Cursor',
        ],
        inLanguage: ['en', 'zh-CN', 'ja', 'zh-TW'],
      }),
    ],
  ],

  transformHead({ pageData, siteData }) {
    const description = pageData.description || siteData.description
    const title = pageData.title && pageData.title !== siteData.title
      ? `${pageData.title} | ${siteData.title}`
      : siteData.title
    // `index.md` → '' (site root), `zh/index.md` → 'zh/' (locale root)
    const relPath = pageData.relativePath
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')
    const url = `https://zenine.github.io/resume-intelligence-hub-site/${relPath}`
    return [
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['link', { rel: 'canonical', href: url }],
    ]
  },

  markdown: {
    config: (md) => {
      md.core.ruler.push('escape_vue_interpolation', (state) => {
        for (const token of state.tokens) {
          if (token.type === 'inline' && token.children) {
            for (const child of token.children) {
              if (child.type === 'text' || child.type === 'html_inline') {
                child.content = child.content
                  .replace(/\{\{/g, '&#123;&#123;')
                  .replace(/\}\}/g, '&#125;&#125;')
              }
            }
          }
        }
      })
    }
  },

  ignoreDeadLinks: true,
  cleanUrls: false,

  vite: {
    resolve: { preserveSymlinks: true },
    server: { fs: { strict: false } },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      description: 'An AI-agent skill to bootstrap a personal career intelligence hub — resumes, interview prep, grant applications, and pre-submission verification. Cross-IDE via AGENTS.md.',
      themeConfig: {
        nav: [
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'Frameworks', link: '/frameworks' },
          { text: 'Philosophy', link: '/philosophy' },
          { text: 'FAQ', link: '/faq' },
          { text: 'GitHub', link: 'https://github.com/Zenine/resume-intelligence-hub' },
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Quick Start', link: '/quick-start' },
              { text: 'Philosophy', link: '/philosophy' },
            ],
          },
          {
            text: 'Reference',
            items: [
              { text: 'Frameworks', link: '/frameworks' },
              { text: 'FAQ', link: '/faq' },
            ],
          },
        ],
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      description: '在 AI IDE 里一句话搭起个人职业发展中枢——简历定制、面试准备、课题申报、投递前核查。通过 AGENTS.md 跨 IDE 通用。',
      themeConfig: {
        nav: [
          { text: '快速开始', link: '/zh/quick-start' },
          { text: '方法论', link: '/zh/frameworks' },
          { text: '设计哲学', link: '/zh/philosophy' },
          { text: '常见问题', link: '/zh/faq' },
          { text: 'GitHub', link: 'https://github.com/Zenine/resume-intelligence-hub' },
        ],
        sidebar: {
          '/zh/': [
            {
              text: '入门',
              items: [
                { text: '快速开始', link: '/zh/quick-start' },
                { text: '设计哲学', link: '/zh/philosophy' },
              ],
            },
            {
              text: '参考',
              items: [
                { text: '方法论', link: '/zh/frameworks' },
                { text: '常见问题', link: '/zh/faq' },
              ],
            },
          ],
        },
        outline: { label: '页面导航' },
        docFooter: { prev: '上一页', next: '下一页' },
        lastUpdated: { text: '最后更新于' },
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        langMenuLabel: '切换语言',
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      description: 'AI IDE で個人のキャリアインテリジェンスハブを一行で構築——履歴書カスタマイズ、面接準備、研究課題申請、応募前検証。AGENTS.md でクロス IDE 対応。',
      themeConfig: {
        nav: [
          { text: 'クイックスタート', link: '/ja/quick-start' },
          { text: 'フレームワーク', link: '/ja/frameworks' },
          { text: 'デザイン哲学', link: '/ja/philosophy' },
          { text: 'よくある質問', link: '/ja/faq' },
          { text: 'GitHub', link: 'https://github.com/Zenine/resume-intelligence-hub' },
        ],
        sidebar: {
          '/ja/': [
            {
              text: 'はじめに',
              items: [
                { text: 'クイックスタート', link: '/ja/quick-start' },
                { text: 'デザイン哲学', link: '/ja/philosophy' },
              ],
            },
            {
              text: 'リファレンス',
              items: [
                { text: 'フレームワーク', link: '/ja/frameworks' },
                { text: 'よくある質問', link: '/ja/faq' },
              ],
            },
          ],
        },
        outline: { label: 'ページナビ' },
        docFooter: { prev: '前のページ', next: '次のページ' },
        lastUpdated: { text: '最終更新' },
        darkModeSwitchLabel: 'テーマ',
        lightModeSwitchTitle: 'ライトモードに切り替え',
        darkModeSwitchTitle: 'ダークモードに切り替え',
        sidebarMenuLabel: 'メニュー',
        returnToTopLabel: 'トップへ戻る',
        langMenuLabel: '言語を切り替え',
      },
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-TW/',
      description: '在 AI IDE 裡一句話搭起個人職涯發展中樞——履歷客製、面試準備、研究計畫申報、投遞前查核。透過 AGENTS.md 跨 IDE 通用。',
      themeConfig: {
        nav: [
          { text: '快速開始', link: '/zh-TW/quick-start' },
          { text: '方法論', link: '/zh-TW/frameworks' },
          { text: '設計哲學', link: '/zh-TW/philosophy' },
          { text: '常見問題', link: '/zh-TW/faq' },
          { text: 'GitHub', link: 'https://github.com/Zenine/resume-intelligence-hub' },
        ],
        sidebar: {
          '/zh-TW/': [
            {
              text: '入門',
              items: [
                { text: '快速開始', link: '/zh-TW/quick-start' },
                { text: '設計哲學', link: '/zh-TW/philosophy' },
              ],
            },
            {
              text: '參考',
              items: [
                { text: '方法論', link: '/zh-TW/frameworks' },
                { text: '常見問題', link: '/zh-TW/faq' },
              ],
            },
          ],
        },
        outline: { label: '頁面導覽' },
        docFooter: { prev: '上一頁', next: '下一頁' },
        lastUpdated: { text: '最後更新於' },
        darkModeSwitchLabel: '主題',
        lightModeSwitchTitle: '切換到淺色模式',
        darkModeSwitchTitle: '切換到深色模式',
        sidebarMenuLabel: '選單',
        returnToTopLabel: '回到頂部',
        langMenuLabel: '切換語言',
      },
    },
  },

  themeConfig: {
    logo: '/hero.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zenine/resume-intelligence-hub' },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询',
                backButtonTitle: '关闭搜索',
                noResultsText: '无结果',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
          ja: {
            translations: {
              button: { buttonText: '検索', buttonAriaLabel: '検索' },
              modal: {
                displayDetails: '詳細を表示',
                resetButtonTitle: 'クエリをクリア',
                backButtonTitle: '検索を閉じる',
                noResultsText: '結果なし',
                footer: {
                  selectText: '選択',
                  navigateText: '移動',
                  closeText: '閉じる',
                },
              },
            },
          },
          'zh-TW': {
            translations: {
              button: { buttonText: '搜尋', buttonAriaLabel: '搜尋' },
              modal: {
                displayDetails: '顯示詳細清單',
                resetButtonTitle: '清除查詢',
                backButtonTitle: '關閉搜尋',
                noResultsText: '無結果',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換',
                  closeText: '關閉',
                },
              },
            },
          },
        },
      },
    },
    footer: {
      message: 'Released under the <a href="https://github.com/Zenine/resume-intelligence-hub-site/blob/main/LICENSE">MIT License</a>. Built with <a href="https://github.com/lordmos/meridian">Meridian</a>.',
      copyright: 'Copyright © 2026 Zenine Xu',
    },
  },
})
