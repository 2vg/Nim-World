// .vuepress/config.js
const twemoji = require('twemoji')

module.exports = {
  base: "/",
  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'NimWorld',
      description: 'Nim言語の日本語解説文書'
    }
  },
  themeConfig: {
    sidebar: [
      ['/', 'Introduction'],
      ['/chapter1', '1: Dive To Nim 👑'],
      {
        collapsable: false,
        children: [
          ['/chapter1-1', '1-1: こんにちは！Nimの世界！']
        ]
      },
      ['/chapter2', '2: 様々な型'],
      {
        collapsable: false,
        children: [
          ['/chapter2-1', '2-1: 序数型'],
          ['/chapter2-2', '2-2: 浮動小数点型'],
          ['/chapter2-3', '2-3: 文字列型'],
          ['/chapter2-4', '2-4: 構造化型'],
        ]
      },
    ],
  },
  markdown: {
    config: md => {
      md.renderer.rules.emoji = (token, idx) => {
        return twemoji.parse(token[idx].content, {
          folder: 'svg',
          ext: '.svg'
        })
      }
    }
  }
}
