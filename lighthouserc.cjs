module.exports = {
  ci: {
    collect: {
      staticDistDir: './docs/.vitepress/dist',
      url: [
        '/resume-intelligence-hub-site/',
        '/resume-intelligence-hub-site/quick-start.html',
        '/resume-intelligence-hub-site/zh/quick-start.html',
        '/resume-intelligence-hub-site/ja/quick-start.html',
        '/resume-intelligence-hub-site/zh-TW/quick-start.html',
      ],
      numberOfRuns: 1,
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.5 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
