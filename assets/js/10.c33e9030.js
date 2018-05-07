(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{69:function(e,t,s){"use strict";s.r(t);var n=s(0),i=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._m(1),e._m(2),s("p",[e._v("たくさんのコマンドがありますが、ここでは最低限覚える必要があるコマンドだけを解説します。")]),e._m(3),s("p",[e._v("まずはパッケージを作ってみましょう！次のコマンドを打ってみてください。")]),e._m(4),s("p",[e._v("実行するとぞろぞろと英文が出てきます。")]),e._m(5),e._m(6),s("p",[e._v("いくつかの質問に答えて行くと自動的にディレクトリ構成をしてくれます。")]),s("p",[e._v("最初の質問では「パッケージタイプはlibですか？binですか？」というものです。")]),e._m(7),e._m(8),s("p",[e._v("パッケージタイプを答えると、次は初期状態でのパッケージのバージョンの指定に関する質問がされます。")]),e._m(9),e._m(10),s("p",[e._v("バージョンの質問が終わるとパッケージの簡単な説明の入力を促されます。")]),s("p",[e._v("こちらは空でエンターすると何の説明もないパッケージとなります。")]),e._m(11),s("p",[e._v("お次はライセンスの選択です。")]),s("p",[e._v("こちらはパッケージタイプの入力と同様にちゃんと選択しないといけません。")]),e._m(12),e._m(13),s("p",[e._v("最後に動作に必要なNimの最低バージョンの指定があります。")]),s("p",[e._v("指定しない場合は今動作しているNimのバージョンが自動的に選択されます。")]),e._m(14),s("p",[e._v("全ての入力が終わると自動的にディレクトリにファイルなどが生成されます。")]),e._m(15),e._m(16),e._m(17),s("p",[e._v("それぞれのファイルは以下のような物です。")]),e._m(18),s("p",[e._v("パッケージの設定ファイル。")]),s("p",[e._v("ここに依存パッケージの情報やパッケージの概要などが書かれている。")]),e._m(19),s("p",[e._v("メインコードを記述する。")]),s("p",[e._v("パッケージ内でモジュールとしてコードを分ける場合、2種類の分け方があります。")]),s("p",[e._v("パッケージ名と同じ名前のディレクトリを作成(ここではhelloディレクトリ)し、そこにメインで使うモジュールを入れると、")]),e._m(20),e._m(21),e._m(22),s("p",[e._v("テスト用ファイル。")]),e._m(23),e._m(24),s("p",[e._v("test1用NimScriptファイル。")]),e._m(25),s("p",[e._v("実際のNimScriptは他にも多様な使い方が出来るので、別の"),s("router-link",{attrs:{to:"/advancednim/nimscript.html"}},[e._v("NimScript")]),e._v("章を参照してください。")],1),e._m(26),s("p",[e._v("nimbleファイルはパッケージのいちばん重要な設定ファイルです。")]),s("p",[e._v("nimbleファイルの最小限の書き方は次のとおりです。")]),e._m(27),e._m(28),e._m(29),e._m(30),e._m(31),e._m(32),e._m(33)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"パッケージ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#パッケージ","aria-hidden":"true"}},[this._v("#")]),this._v(" パッケージ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Nimのパッケージシステムは"),t("a",{attrs:{href:"https://github.com/nim-lang/nimble",target:"_blank",rel:"noopener noreferrer"}},[this._v("nimble")]),this._v("という物で管理します。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("パッケージリストはGitHubで管理されています。 "),t("a",{attrs:{href:"https://github.com/nim-lang/packages",target:"_blank",rel:"noopener noreferrer"}},[this._v("nim-lang/packages")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"パッケージ作成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#パッケージ作成","aria-hidden":"true"}},[this._v("#")]),this._v(" パッケージ作成")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("nimble init\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("例えば"),t("code",[this._v("/hello")]),this._v("というディレクトリで"),t("code",[this._v("nimble init")]),this._v("すると次のように表示されるはずです。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('$ nimble init\n      Info: In order to initialise a new Nimble package, I will need to ask you\n        ... some questions. Default values are shown in square brackets, press\n        ... enter to use them.\n      Using "hello" for new package name\n      Using "2vg" for new package author\n      Using "src" for new package source directory\n    Prompt: Package type? [lib/bin]\n    Answer: _\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("lib")]),this._v("はライブラリとしてNimプログラムをパッケージにする時に、"),t("code",[this._v("bin")]),this._v("は実行バイナリとしてNimプログラムをパッケージにする時と使い分けます。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("ちなみに何も答えずにエンターを押したり、"),t("code",[this._v("lib")]),this._v("や"),t("code",[this._v("bin")]),this._v("以外の答えを入力すると再度"),t("code",[this._v("Answer:")]),this._v("が表示されます。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    Prompt: Initial version of package? [0.1.0]\n    Answer: _\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("何も入力せずエンターを押すと自動的に"),t("code",[this._v("0.1.0")]),this._v("指定になります。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    Prompt: Package description? [A new awesome nimble package]\n    Answer: _\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("迷ったら"),t("code",[this._v("MIT")]),this._v("でいいでしょう。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    Prompt: Package License? [MIT/BSD2/GPLv3/LGPLv3/Apache2]\n    Answer: _\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    Prompt: Lowest supported Nim version? [0.18.0]\n    Answer: _\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("code",[e._v("パッケージ名.nimble")]),e._v("、"),s("code",[e._v("src/パッケージ名.nim")]),e._v("、"),s("code",[e._v("tests/test1.nim")]),e._v("、"),s("code",[e._v("tests/test1.nims")]),e._v("というファイルなどが生成されているはずです。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("今回は"),t("code",[this._v("hello")]),this._v("パッケージとします。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v(".\n├── hello.nimble\n├── src\n│   └── hello.nim\n└── tests\n    ├── test1.nim\n    └── test1.nims\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("hello.nimble")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("src/hello.nim")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("hello/モジュール名")]),this._v("でサブモジュールのような形で公開し、こちらも合わせて利用することが出来ます。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("private")]),this._v("というディレクトリを作成して、そこにメインで使うモジュールを入れると、"),t("code",[this._v("private")]),this._v("内のモジュールは公開されず、パッケージのプロジェクト内でのみ利用することが出来ます。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("tests/test1.nim")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("nimble test")]),this._v("でパッケージのテストが実行でき、そのテスト内容をこのファイルに記述します。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("tests/test1.nims")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("ここでのNimScriptファイルは"),t("code",[this._v("hoge.nim.cfg")]),this._v("のような設定ファイルと同じような感じですが、")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"nimbleファイル"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nimbleファイル","aria-hidden":"true"}},[this._v("#")]),this._v(" .nimbleファイル")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('# これらの記述は必須項目で、1つでも欠けていると`nimble`は警告を出します。\n\n# Package\n\n#バージョン情報 \nversion     = "0.1.0"\n# 作成者の名前\nauthor      = "Your Name"\n# パッケージの概要\ndescription = "Example .nimble file."\n# パッケージのライセンス\nlicense     = "MIT"\n\n# Deps\n\n# 依存関係 Nimコンパイラの依存記述は必須\nrequires "nim >= 0.18.0"\n# パッケージリストに無くてもGitHubなどに上がっていればこのように指定できる\n# requires "https://github.com/2vg/mofuw >= 0.1.0"\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v('task タスク名, "概要"')]),this._v("と記述することで、"),t("code",[this._v("nimble タスク名")]),this._v("でそのボディに記述されたコードを実行できます。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("before タスク名")]),this._v("と記述するとそのタスク名のタスクが実行される前に、ボディに記述されたコードを実行実行されます。")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-nim"}},[s("code",[e._v("task hello"),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"this is hello task."')]),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v("\n  echo "),s("span",{attrs:{class:"token string"}},[e._v('"Hello"')]),e._v("\n\nbefore hello"),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v("\n  echo "),s("span",{attrs:{class:"token string"}},[e._v('"helloタスク実行前準備"')]),e._v("\n\n"),s("span",{attrs:{class:"token comment"}},[e._v("# $ nimble hello")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("# $ helloタスク実行前準備")]),e._v("\n"),s("span",{attrs:{class:"token comment"}},[e._v("# $ Hello")]),e._v("\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("また、他にも以下のような項目があります。 "),t("a",{attrs:{href:"https://github.com/nim-lang/nimble#optional",target:"_blank",rel:"noopener noreferrer"}},[this._v("optional")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("skipDirs")]),e._v(": インストール時にスキップするディレクトリ名のリスト。カンマで区切れます。")]),s("li",[s("code",[e._v("skipFiles")]),e._v(": インストール時にスキップするファイル名のリスト。カンマで区切れます。")]),s("li",[s("code",[e._v("skipExt")]),e._v(": インストール時にスキップするファイル拡張子のリスト。カンマで区切れます。")]),s("li",[s("code",[e._v("installDirs")]),e._v(":")]),s("li",[s("code",[e._v("installFiles")]),e._v(":")]),s("li",[s("code",[e._v("installExt")]),e._v(":")]),s("li",[s("code",[e._v("srcDir")]),e._v(" - ソースコードを含むディレクトリを指定します。デフォルトは"),s("code",[e._v("src")]),e._v("です。")]),s("li",[s("code",[e._v("binDir")]),e._v(" - "),s("code",[e._v("nimble build")]),e._v("がバイナリを出力するディレクトリを指定します。デフォルトでは"),s("code",[e._v("bin")]),e._v("です。")]),s("li",[s("code",[e._v("bin")]),e._v(":")]),s("li",[s("code",[e._v("backend")]),e._v(": コンパイルに使用するバックエンドを指定します。"),s("code",[e._v("c")]),e._v("、"),s("code",[e._v("cc")]),e._v("、 "),s("code",[e._v("cpp")]),e._v("、 "),s("code",[e._v("objc")]),e._v("、 "),s("code",[e._v("js")]),e._v("が指定可能で、デフォルトは"),s("code",[e._v("c")]),e._v("です。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"パッケージのインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#パッケージのインストール","aria-hidden":"true"}},[this._v("#")]),this._v(" パッケージのインストール")])}],!1,null,null,null);t.default=i.exports}}]);