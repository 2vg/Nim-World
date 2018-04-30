// .vuepress/config.js
const path = require('path')
const twemoji = require('twemoji')

const sidebarGroup = (dirName, children = [], collapsable = false) => {
  let directory = path.join('/', dirName, '/')
  return [
    directory,
    {
      collapsable,
      children: children.map(child => path.join(directory, child))
    }
  ]
}

module.exports = {
  base: '/',
  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'NimWorld',
      description: 'Nim言語の日本語解説文書'
    }
  },
  themeConfig: {
    sidebar: [
      '/',
      ...sidebarGroup('divetonim', [
        'hellonim'
      ]),
      ...sidebarGroup('variable', [
      ]),
      ...sidebarGroup('types', [
        'ordinal',
        'floating',
        'string',
        'structured'
      ]),
      ...sidebarGroup('condition', [
        'if',
        'case',
        'when'
      ]),
      ...sidebarGroup('loop', [
        'while',
        'for',
        'iterator'
      ]),
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
