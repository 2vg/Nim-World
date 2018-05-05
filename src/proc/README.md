# 関数

Nimの関数は`proc`で定義されます。

引数や返り値は`名前: 型`で定義し、最後に`=`をつけてインデントすることで定義していきます。

関数を呼ぶ時は他の言語と同じように、`関数名(第一引数, 第二引数...)`とやることで呼び出しができます。

また、Nimでは呼び出し方法が他にもあり、`第一引数.関数名(第二引数以降はカッコ内)`のように呼び出すことも可能です。

また、引数が1つの場合は`関数名 引数`と呼び出すことも可能です。

では定義例と呼び出し例を実際に見てみましょう。

```nim
proc call(str1: string, str2: string): string =
  result = str1 & str2 # &は文字列連結演算子

proc call2(str: string): string =
  result = str

echo call("hello ", "world")
echo "hello ".call("world")

echo call2 "hello world"
```

`call2`だけ引数が1つですが、`echo`の実行結果は全て同じ`hello world`です。

ところで、return`が無いことに気づきましたか？

`proc`は暗黙的に`result`変数を持っていて、`reteun T`は暗黙的に`result`変数を返しています。

`result`変数に値を入れておくことで`return`を省くことができます。

また、`return`が無かったり`result`変数に値を入れてない場合、

最後に書かれた変数が暗黙的に返されるようになっています。

従って次のような書き方も可能です。

```nim
proc call(str: string): string =
  echo str
  str
```

返り値として`void`と定義すると何も返さない関数になります。

返り値の型を書かない場合は暗黙的に`void`になるので、`void`は省くことが出来ます。

```nim
proc call(): void =
  echo "call"

proc call2() =
  echo "call"

# callとcall2は全く同じ
```

複数の引数が同じ型の場合、まとめて書くことができます。

型を一度書くだけで複数の同じ型の引数を定義することが出来て便利です。

複数の型が混在する時、カンマ`,`が通常の引数定義と混ざってしまうので、可読性を上げるためにセミコロン`;`で区切ることが出来ます。

```nim
proc call(a, b, c: string) =
  echo a
  echo b
  echo c

proc call2(a, b, c: string; d: int) =
  echo a
  echo b
  echo c
  echo d
```

引数の型に`var`をつけることで渡す変数の中身を直接変更することができます。

ただし、その際は渡す変数も`var`で定義されている必要があります。

```nim
var a = "Hello, World!"

proc edit(str: var string) =
  str = "Hell, World👿"

edit(a)

echo a # Hell, World👿
```
