// .vuepress/config.js
const path = require('path')
const twemoji = require('twemoji')

const sidebarGroup = (dirName, children = [], collapsable = true) => {
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
        'structured',
        'generics'
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
      ...sidebarGroup('packages'),
      ...sidebarGroup('advancednim', [
        'macros', // マクロ
      　 'ptrmem', // ポインタとメモリ
        'multithreads', // マルチスレッド
        'ffi', // FFI
        'compileoptions', // コンパイルオプション
        'nimscript', //NimScript
        'asm' // アセンブリ
      ]),
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
