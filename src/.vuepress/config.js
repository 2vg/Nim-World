// .vuepress/config.js
module.exports = {
  base: "/",
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
  }
}