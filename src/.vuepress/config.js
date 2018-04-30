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
      ['/divetonim/', '1: Dive To Nim 👑'],
      {
        collapsable: false,
        children: [
          ['/divetonim/hellonim', '1-1: こんにちは！Nimの世界！']
        ]
      },
      ['/variable/', '2: 変数'],
      ['/types/', '3: 様々な型'],
      {
        collapsable: false,
        children: [
          ['/types/ordinal', '3-1: 序数型'],
          ['/types/floating', '3-2: 浮動小数点型'],
          ['/types/string', '3-3: 文字列型'],
          ['/types/structured', '3-4: 構造化型']
        ]
      },
      ['/condition/', '4: 条件'],
      {
        collapsable: false,
        children: [
          ['/condition/if', '4-1: if'],
          ['/condition/case', '4-2: case'],
          ['/condition/when', '4-3: when']
        ]
      },
      ['/loop/', '5: ループ'],
      {
        collapsable: false,
        children: [
          ['/loop/while', '5-1: while'],
          ['/loop/for', '5-2: for'],
          ['/loop/iterator', '5-3: iterator']
        ]
      },
      // ['/chapter6', '6: 関数'],
      // ['/chapter7', '7: 参照'],
      // ['/chapter8', '8: テスト'],
      // ['/chapter9', '9: モジュールとパッケージ'],
      // {
      //   collapsable: false,
      //   children: [
      //     ['/chapter9-1', '9-1: モジュール'],
      //     ['/chapter9-2', '9-2: パッケージ']
      //   ]
      // },
      // ['/chapter10', '10: 高度なNim'],
      // {
      //   collapsable: false,
      //   children: [
      //     ['/chapter10-1', '10-1: マクロ'],
      //     ['/chapter10-2', '10-2: ポインタとメモリ'],
      //     ['/chapter10-3', '10-3: マルチスレッド'],
      //     ['/chapter10-4', '10-4: FFI'],
      //     ['/chapter10-5', '10-5: コンパイルオプション'],
      //     ['/chapter10-6', '10-6: アセンブリ']
      //   ]
      // },
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
