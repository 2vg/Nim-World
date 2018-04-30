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
      ['/chapter2', '2: 変数'],
      ['/chapter3', '3: 様々な型'],
      {
        collapsable: false,
        children: [
          ['/chapter3-1', '3-1: 序数型'],
          ['/chapter3-2', '3-2: 浮動小数点型'],
          ['/chapter3-3', '3-3: 文字列型'],
          ['/chapter3-4', '3-4: 構造化型']
        ]
      },
/*      ['/chapter4', '4: 条件'],
      {
        collapsable: false,
        children: [
          ['/chapter4-1', '4-1: if'],
          ['/chapter4-2', '4-2: case'],
          ['/chapter4-3', '4-3: when']
        ]
      },
      ['/chapter5', '5: ループ'],
      {
        collapsable: false,
        children: [
          ['/chapter5-1', '5-1: while'],
          ['/chapter5-2', '5-2: for'],
          ['/chapter5-3', '5-3: iterator']
        ]
      },
      ['/chapter6', '6: 関数'],
      ['/chapter7', '7: 参照'],
      ['/chapter8', '8: テスト'],
      ['/chapter9', '9: モジュールとパッケージ'],
      {
        collapsable: false,
        children: [
          ['/chapter9-1', '9-1: モジュール'],
          ['/chapter9-2', '9-2: パッケージ']
        ]
      },
      ['/chapter10', '10: 高度なNim'],
      {
        collapsable: false,
        children: [
          ['/chapter10-1', '10-1: マクロ'],
          ['/chapter10-2', '10-2: ポインタとメモリ'],
          ['/chapter10-3', '10-3: マルチスレッド'],
          ['/chapter10-4', '10-4: FFI'],
          ['/chapter10-5', '10-5: コンパイルオプション'],
          ['/chapter10-6', '10-6: アセンブリ']
        ]
      },*/
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
