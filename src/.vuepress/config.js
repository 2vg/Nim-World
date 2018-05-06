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
      ...sidebarGroup('variable'),
      ...sidebarGroup('types', [
        'ordinal',
        'floating',
        'string',
        'structured'
        // 'generics'
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
      ...sidebarGroup('proc'),
      ...sidebarGroup('ref'),
      ...sidebarGroup('tests'),
      ...sidebarGroup('modules'),
      // ...sidebarGroup('packages'),
      // // 高度なNim
      // ...sidebarGroup('chapter10', [
      //   'chapter10-1', // マクロ
      //   'chapter10-2', // ポインタとメモリ
      //   'chapter10-3', // マルチスレッド
      //   'chapter10-4', // FFI
      //   'chapter10-5', // コンパイルオプション
      //   'chapter10-6', // アセンブリ
      // ]),
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
