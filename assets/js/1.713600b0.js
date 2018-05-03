(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{51:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"構造化型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#構造化型","aria-hidden":"true"}},[t._v("#")]),t._v(" 構造化型")]),a("h2",{attrs:{id:"配列型とシーケンス型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配列型とシーケンス型","aria-hidden":"true"}},[t._v("#")]),t._v(" 配列型とシーケンス型")]),a("ul",[a("li",[t._v("配列 "),a("code",[t._v("array[size, T]")])]),a("li",[t._v("シーケンス "),a("code",[t._v("seq[T]")])])]),a("p",[t._v("配列型は、コンパイル時に指定されたサイズで固定され、指定された型をそれぞれの要素に持ちます。")]),a("p",[t._v("各要素には"),a("code",[t._v("[]")]),t._v("演算子にインデックス数値を指定することでアクセスでき、文字列型と同じように"),a("code",[t._v("[X .. Y]")]),t._v("でスライスが可能です。")]),a("p",[t._v("また、型宣言以外に配列コンストラクタ"),a("code",[t._v("[]")]),t._v("を使用して初期化することも出来ます。")]),a("p",[t._v("この時配列は型推論が可能で、最初の型の要素から推論され、他のすべての要素は最初の型に暗黙的に変換できる必要があります。")]),a("p",[t._v("シーケンス型は、配列と似ていますが、実行後もサイズが変更可能な配列です。")]),a("p",[t._v("配列型と同じく"),a("code",[t._v("[]")]),t._v("演算子を使って任意のインデックス値の値を取得したりスライスすることが出来ます。")]),a("p",[t._v("ちなみに、スライスされて返される配列はシーケンス型です。これは文字列型や配列型でも同じです。")]),a("p",[t._v("シーケンス型のコンストラクタは"),a("code",[t._v("@[]")]),t._v("を使って初期化出来ます。")]),a("p",[t._v("シーケンス型を作成する別の方法で、"),a("code",[t._v("newSeq()")]),t._v("関数を使うことも出来ます。")]),a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v("\n  intArray"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" array"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("8")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" int"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  intSeq"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" seq"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("int"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\necho intArray"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 0")]),t._v("\necho intArray"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("..")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# @[0, 1, 2, 3]")]),t._v("\n\nintArray"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("7")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("8")]),t._v("\n\necho intArray "),a("span",{attrs:{class:"token comment"}},[t._v("# [0, 1, 2, 3, 4, 5, 6, 7, 8]")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# intArray[8] = 9 <- when comment out, can not compile because intArray's size is 8.")]),t._v("\n\necho intSeq "),a("span",{attrs:{class:"token comment"}},[t._v("# @[0, 1, 2, 3]")]),t._v("\n\nintSeq"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\necho intSeq "),a("span",{attrs:{class:"token comment"}},[t._v("# @[0, 1, 2, 3, 4]")]),t._v("\n")])]),a("h2",{attrs:{id:"タプル型とオブジェクト型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#タプル型とオブジェクト型","aria-hidden":"true"}},[t._v("#")]),t._v(" タプル型とオブジェクト型")]),a("p",[t._v("タプル型とオブジェクト型は、指定型と様々な名前付フィールドが定義されたストレージコンテナです。")]),a("p",[t._v("タプルはフィールドの順序も定義する必要があり、ほとんどオーバーヘッドがありません。")]),a("p",[t._v("タプルコンストラクタ"),a("code",[t._v("()")]),t._v("でタプルを作成することができます。")]),a("p",[t._v("コンストラクタ内のフィールド順序はタプル型の定義と一緒である必要があります。")]),a("p",[t._v("タプル型は通常"),a("code",[t._v("tuple[T]")]),t._v("で定義します。")]),a("p",[t._v("ですが、宣言時はオブジェクト型との一貫性を保つためにインデントで定義することも可能です。")]),a("p",[t._v("オブジェクト型は、タプル型より多くの機能を持っており、継承と情報隠蔽があります。")]),a("p",[t._v("また、オブジェクト型は実行時に型にアクセスできるので、"),a("code",[t._v("of")]),t._v("演算子を使ってオブジェクトの型を判断できます。")]),a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("# Person = tuple[name: string, age: int]")]),t._v("\n  Person "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("tuple")]),t._v("\n    name"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" string\n    age"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" int\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("# RootObjを継承しないとfinalオブジェクトとなり継承不可")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("# ただし、{.inheritable.}を使うことで回避可能")]),t._v("\n  Human "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("object")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("of")]),t._v(" RootObj\n    name"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" string\n    age"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" int\n\n  Child "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("object")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("of")]),t._v(" Human\n    toy"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" string\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("# p1はPerson型と一緒のタプル")]),t._v("\n  p1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"john"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  p2"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Person "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"an"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("18")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  h1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Human")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"mofu"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  c1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Child")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"mfchan"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toy"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"computer"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\necho p1"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('" love "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" p2"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("name\necho "),a("span",{attrs:{class:"token string"}},[t._v('"my name is "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" h1"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("name\n\necho c1"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('" have the "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" c1"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("toy\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" c1 "),a("span",{attrs:{class:"token operator"}},[t._v("of")]),t._v(" Human"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  echo "),a("span",{attrs:{class:"token string"}},[t._v('"c1 is subset of Human."')]),t._v("\n")])]),a("h2",{attrs:{id:"open-arrays"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-arrays","aria-hidden":"true"}},[t._v("#")]),t._v(" Open arrays")]),a("p",[a("code",[t._v("Open arrays")]),t._v("は、関数のパラメータの型としてのみ使用することが出来ます。")]),a("p",[t._v("定義の仕方は"),a("code",[t._v("openArray[T]")]),t._v("です。")]),a("p",[t._v("これは固定サイズである配列"),a("code",[t._v("array[N, T]")]),t._v("をより柔軟に引数にすることができ、非常に便利です。")]),a("p",[t._v("もちろん、可変長配列"),a("code",[t._v("seq[T]")]),t._v("を受け取ることも可能です。")]),a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" array"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" char"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'t'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'e'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'s'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'t'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("proc")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("aEcho")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" openArray"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("char"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v "),a("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" arr"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    echo "),a("span",{attrs:{class:"token string"}},[t._v('"index "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("$")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('" is "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" v\n\na"),a("span",{attrs:{class:"token operator"}},[t._v(".")]),t._v("aEcho\n")])]),a("h2",{attrs:{id:"varargs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#varargs","aria-hidden":"true"}},[t._v("#")]),t._v(" Varargs")]),a("p",[a("code",[t._v("Varargs")]),t._v("は、"),a("code",[t._v("Open arrays")]),t._v("と同じく関数のパラメータとしてのみ使用することができます。")]),a("p",[t._v("これは関数の最後の引数の型としてのみ使うことができ、引数を暗黙的に配列に変換します。")]),a("pre",{pre:!0,attrs:{class:"language-nim"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("proc")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("myWriteln")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" File"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" varargs"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("string"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("items")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("write")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("write")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("myWriteln")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stdout"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"abc"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"def"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"xyz"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# これはこの形に変換されます")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('# myWriteln(stdout, ["abc", "def", "xyz"])')]),t._v("\n")])])])}],!1,null,null,null);s.default=r.exports}}]);