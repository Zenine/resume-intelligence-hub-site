import { defineConfig } from 'vitepress'

const siteOrigin = 'https://zenine.github.io/resume-intelligence-hub-site/'

const locales = [
  { key: 'root', prefix: '', hreflang: 'en-US', ogLocale: 'en_US' },
  { key: 'zh', prefix: 'zh/', hreflang: 'zh-CN', ogLocale: 'zh_CN' },
  { key: 'ja', prefix: 'ja/', hreflang: 'ja', ogLocale: 'ja_JP' },
  { key: 'zh-TW', prefix: 'zh-TW/', hreflang: 'zh-TW', ogLocale: 'zh_TW' },
] as const

type LocaleKey = typeof locales[number]['key']

const faqSummaries: Record<LocaleKey, { question: string; answer: string }[]> = {
  root: [
    {
      question: 'What is resume-intelligence-hub?',
      answer: 'resume-intelligence-hub is an AI agent skill that bootstraps a private career intelligence hub for resumes, interview preparation, grant applications, credential dossiers, pre-submission verification, stretch targets, gap analysis, and quarterly SMART planning.',
    },
    {
      question: 'What specific problem does it solve?',
      answer: 'It replaces scattered resumes, ad-hoc interview prep, and reactive career tracking with structured infrastructure: factual career data in profiles, a positioning lock in AGENTS.md, and workflows from JD-tailored resume generation to public-source fact-checking.',
    },
    {
      question: 'Who is this for?',
      answer: 'It is for people managing a job search, planning a move 1-2 levels up, applying for research grants, or preparing credential or promotion dossiers, especially across bilingual markets or multiple application types.',
    },
    {
      question: 'How does it compare to other resume AI tools?',
      answer: 'Most resume tools are one-shot generators. resume-intelligence-hub is persistent career infrastructure that keeps context across months, biases outputs toward a stretch target, verifies claims, and composes with specialized resume or LinkedIn tools.',
    },
    {
      question: 'Does it work with my AI IDE?',
      answer: 'Yes. The hub uses AGENTS.md as its cross-IDE instruction file for tools such as Claude Code, Cursor, Codex, Cline, Windsurf, and GitHub Copilot, with IDE-specific wiring covered in the Quick Start troubleshooting section.',
    },
    {
      question: 'Is the research/grant track required?',
      answer: 'No. The research track is optional and off by default. If you do not apply for academic grants or research funding, research-related files and workflows are omitted.',
    },
    {
      question: 'How do I get started?',
      answer: 'Install the skill with npx skills add Zenine/resume-intelligence-hub -g -y, open your AI IDE in the directory where the hub should live, and ask it to build your career repo.',
    },
  ],
  zh: [
    {
      question: 'resume-intelligence-hub 是什么？',
      answer: 'resume-intelligence-hub 是一个 AI agent skill，用来搭建私有个人职业发展中枢，统一管理简历、面试准备、课题申报、职称/资质/晋升材料、投递前核查，并支持挑战目标、差距分析和季度 SMART 计划。',
    },
    {
      question: '它具体解决什么问题？',
      answer: '它把散落的简历、临时面试准备和被动职业管理替换为结构化基础设施：profiles/ 存放事实职业数据，AGENTS.md 锁定定位目标，七个工作流覆盖 JD 定制简历到投递前公开资料核查。',
    },
    {
      question: '适合谁用？',
      answer: '适合正在求职、计划往高 1-2 级跳槽、申请科研课题，或准备职称/资质/晋升申报的人，尤其适合双语市场、多类申报材料和需要 AI 跨会话记住职业背景的用户。',
    },
    {
      question: '和其他简历 AI 工具有什么不同？',
      answer: '多数简历工具是一次性生成器。resume-intelligence-hub 是可持续迭代的职业基础设施，会围绕定位目标生成内容、核查承重声明、识别能力差距，并能叠加 ATS 或 LinkedIn 等专项工具。',
    },
    {
      question: '支持我用的 AI IDE 吗？',
      answer: '支持。hub 使用 AGENTS.md 作为跨 IDE 指令文件，Claude Code、Cursor、Codex、Cline、Windsurf 和 GitHub Copilot 都可以读取，具体接线方式见快速开始的排查部分。',
    },
    {
      question: '科研课题那条线是必须的吗？',
      answer: '不是。科研课题线默认关闭；如果初始化时回答不申请学术课题或科研经费，相关文件和工作流不会生成。',
    },
    {
      question: '怎么开始？',
      answer: '运行 npx skills add Zenine/resume-intelligence-hub -g -y 安装 skill，然后在 AI IDE 中进入目标目录，说“帮我搭个简历库”。',
    },
  ],
  ja: [
    {
      question: 'resume-intelligence-hub とは何ですか？',
      answer: 'resume-intelligence-hub は、履歴書、面接準備、研究費申請、資格/昇進書類、提出前検証を一元管理するプライベートなキャリアインテリジェンスハブを構築する AI エージェントスキルです。',
    },
    {
      question: '具体的にどんな問題を解決しますか？',
      answer: '散らばった履歴書、場当たり的な面接準備、目標ポジションへの進捗管理不足を、profiles/ の事実データ、AGENTS.md のターゲットロック、7 つのワークフローによる構造化インフラに置き換えます。',
    },
    {
      question: '誰に向いていますか？',
      answer: '求職中、1〜2 レベル上へのキャリアアップ、研究費申請、資格/昇進書類の準備をしている方に向いています。複数市場や複数種類の申請を扱う場合にも有用です。',
    },
    {
      question: '他の履歴書 AI ツールと何が違いますか？',
      answer: '多くの履歴書ツールは一度きりの生成器です。resume-intelligence-hub は数ヶ月にわたって改善できる持続的なキャリア基盤で、目標に沿った出力、主張の検証、ギャップ分析を支援します。',
    },
    {
      question: '自分の AI IDE で使えますか？',
      answer: 'はい。ハブは AGENTS.md をクロス IDE の指示ファイルとして使います。Claude Code、Cursor、Codex、Cline、Windsurf、GitHub Copilot などで利用できます。',
    },
    {
      question: '科学研究費申請トラックは必須ですか？',
      answer: 'いいえ。研究トラックはデフォルトで無効です。学術研究費や研究助成金の申請をしない場合、関連ファイルとワークフローは省略されます。',
    },
    {
      question: 'どうやって始めますか？',
      answer: 'npx skills add Zenine/resume-intelligence-hub -g -y でインストールし、AI IDE でハブを置きたいディレクトリを開いて、キャリアリポジトリを作るよう依頼します。',
    },
  ],
  'zh-TW': [
    {
      question: 'resume-intelligence-hub 是什麼？',
      answer: 'resume-intelligence-hub 是一個 AI agent skill，用來搭建私有個人職涯發展中樞，統一管理履歷、面試準備、課題申報、職稱/資質/晉升材料、投遞前查核，並支援挑戰目標、差距分析和季度 SMART 計畫。',
    },
    {
      question: '它具體解決什麼問題？',
      answer: '它把散落的履歷、臨時面試準備和被動職涯管理換成結構化基礎設施：profiles/ 存放事實性職業資料，AGENTS.md 鎖定定位目標，七個工作流程涵蓋 JD 客製履歷到投遞前公開資料查核。',
    },
    {
      question: '適合誰使用？',
      answer: '適合正在求職、計畫往高 1-2 級跳槽、申請研究計畫，或準備職稱/資質/晉升申報的人，尤其適合雙語市場、多類申報材料和需要 AI 跨會話記住職涯背景的使用者。',
    },
    {
      question: '和其他履歷 AI 工具有什麼不同？',
      answer: '多數履歷工具是一次性生成器。resume-intelligence-hub 是可持續迭代的職涯基礎設施，會圍繞定位目標生成內容、查核承重聲明、識別能力差距，並能疊加 ATS 或 LinkedIn 等專項工具。',
    },
    {
      question: '支援我使用的 AI IDE 嗎？',
      answer: '支援。hub 使用 AGENTS.md 作為跨 IDE 指令檔，Claude Code、Cursor、Codex、Cline、Windsurf 和 GitHub Copilot 都可以讀取。',
    },
    {
      question: '科研課題那條線是必須的嗎？',
      answer: '不是。科研課題線預設關閉；如果初始化時回答不申請學術課題或研究計畫，相關檔案和工作流程不會生成。',
    },
    {
      question: '怎麼開始？',
      answer: '執行 npx skills add Zenine/resume-intelligence-hub -g -y 安裝 skill，然後在 AI IDE 中進入目標資料夾，說“幫我建職涯庫”。',
    },
  ],
}

function getLocaleFromRelativePath(relativePath: string): LocaleKey {
  const locale = locales.find((candidate) => candidate.prefix && relativePath.startsWith(candidate.prefix))
  return locale?.key ?? 'root'
}

function getLocalizedRelativePath(relativePath: string, localeKey: LocaleKey): string {
  const sourceLocale = locales.find((candidate) => candidate.key === getLocaleFromRelativePath(relativePath))!
  const targetLocale = locales.find((candidate) => candidate.key === localeKey)!
  const pagePath = sourceLocale.prefix
    ? relativePath.slice(sourceLocale.prefix.length)
    : relativePath
  return `${targetLocale.prefix}${pagePath}`
}

function getPageUrl(relativePath: string): string {
  const relPath = relativePath
    .replace(/index\.md$/, '')
    .replace(/\.md$/, '.html')
  return `${siteOrigin}${relPath}`
}

function getLlmsTxtUrl(localeKey: LocaleKey): string {
  const locale = locales.find((candidate) => candidate.key === localeKey)!
  return `${siteOrigin}${locale.prefix}llms.txt`
}

function getFaqJsonLd(localeKey: LocaleKey) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSummaries[localeKey].map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export default defineConfig({
  base: '/resume-intelligence-hub-site/',
  title: 'Resume Intelligence Hub',
  titleTemplate: ':title | Resume Intelligence Hub',

  sitemap: {
    hostname: 'https://zenine.github.io/resume-intelligence-hub-site/',
  },

  head: [
    ['link', { rel: 'icon', href: '/resume-intelligence-hub-site/hero.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#7c3aed' }],
    ['meta', { name: 'google-site-verification', content: 'JDAD7_0Djk8ErI3P93dZ2nq5ZKrVGxEi6c7eM7xt-IM' }],
    // Open Graph / Twitter — site-wide static
    ['meta', { property: 'og:site_name', content: 'Resume Intelligence Hub' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://zenine.github.io/resume-intelligence-hub-site/og.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://zenine.github.io/resume-intelligence-hub-site/og.png' }],
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
          'An AI-agent skill that bootstraps a personal career intelligence hub — a private Git repo that is both a single source of truth (resumes, interview prep, grant applications, credential dossiers, pre-submission verification) and a career compass (stretch target, capability gap, quarterly plan).',
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
          'credential dossier',
          'promotion dossier',
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
    const url = getPageUrl(pageData.relativePath)
    const localeKey = getLocaleFromRelativePath(pageData.relativePath)
    const locale = locales.find((candidate) => candidate.key === localeKey)!
    const localeAlternates = locales.map((targetLocale) => [
      'link',
      {
        rel: 'alternate',
        hreflang: targetLocale.hreflang,
        href: getPageUrl(getLocalizedRelativePath(pageData.relativePath, targetLocale.key)),
      },
    ] as const)
    const ogLocaleAlternates = locales
      .filter((targetLocale) => targetLocale.key !== localeKey)
      .map((targetLocale) => [
        'meta',
        { property: 'og:locale:alternate', content: targetLocale.ogLocale },
      ] as const)
    const faqJsonLd = faqSummaries[localeKey] && pageData.relativePath === getLocalizedRelativePath('faq.md', localeKey)
      ? [[
          'script',
          { type: 'application/ld+json' },
          JSON.stringify(getFaqJsonLd(localeKey)),
        ] as const]
      : []

    return [
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:locale', content: locale.ogLocale }],
      ...ogLocaleAlternates,
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['link', { rel: 'canonical', href: url }],
      ...localeAlternates,
      ['link', { rel: 'alternate', hreflang: 'x-default', href: getPageUrl(getLocalizedRelativePath(pageData.relativePath, 'root')) }],
      ['link', { rel: 'alternate', type: 'text/plain', title: 'llms.txt', href: getLlmsTxtUrl(localeKey) }],
      ['link', { rel: 'alternate', type: 'text/plain', title: 'llms-full.txt', href: 'https://zenine.github.io/resume-intelligence-hub-site/llms-full.txt' }],
      ...faqJsonLd,
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
      description: 'An AI-agent skill to bootstrap a personal career intelligence hub — resumes, interview prep, grant applications, credential dossiers, and pre-submission verification. Cross-IDE via AGENTS.md.',
      themeConfig: {
        nav: [
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'Contract', link: '/skill-contract' },
          { text: 'Examples', link: '/examples' },
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
              { text: 'Skill Contract', link: '/skill-contract' },
              { text: 'Examples', link: '/examples' },
              { text: 'Philosophy', link: '/philosophy' },
            ],
          },
          {
            text: 'Reference',
            items: [
              { text: 'Frameworks', link: '/frameworks' },
              { text: 'FAQ', link: '/faq' },
              { text: 'Release / Version Mapping', link: '/release' },
              { text: 'Ops Decisions', link: '/ops-decisions' },
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
          { text: '使用契约', link: '/zh/skill-contract' },
          { text: '样例', link: '/zh/examples' },
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
                { text: '使用契约', link: '/zh/skill-contract' },
                { text: '样例', link: '/zh/examples' },
                { text: '设计哲学', link: '/zh/philosophy' },
              ],
            },
            {
              text: '参考',
              items: [
                  { text: '方法论', link: '/zh/frameworks' },
                  { text: '常见问题', link: '/zh/faq' },
                  { text: '发布 / 版本映射', link: '/zh/release' },
                  { text: '运维决策', link: '/zh/ops-decisions' },
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
          { text: '利用契約', link: '/ja/skill-contract' },
          { text: 'サンプル', link: '/ja/examples' },
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
                { text: '利用契約', link: '/ja/skill-contract' },
                { text: 'サンプル', link: '/ja/examples' },
                { text: 'デザイン哲学', link: '/ja/philosophy' },
              ],
            },
            {
              text: 'リファレンス',
              items: [
                  { text: 'フレームワーク', link: '/ja/frameworks' },
                  { text: 'よくある質問', link: '/ja/faq' },
                  { text: 'リリース / バージョン対応', link: '/ja/release' },
                  { text: '運用決定', link: '/ja/ops-decisions' },
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
          { text: '使用契約', link: '/zh-TW/skill-contract' },
          { text: '樣例', link: '/zh-TW/examples' },
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
                { text: '使用契約', link: '/zh-TW/skill-contract' },
                { text: '樣例', link: '/zh-TW/examples' },
                { text: '設計哲學', link: '/zh-TW/philosophy' },
              ],
            },
            {
              text: '參考',
              items: [
                  { text: '方法論', link: '/zh-TW/frameworks' },
                  { text: '常見問題', link: '/zh-TW/faq' },
                  { text: '發布 / 版本映射', link: '/zh-TW/release' },
                  { text: '運維決策', link: '/zh-TW/ops-decisions' },
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
