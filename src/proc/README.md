# 関数

## proc
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

ところで、`return`が無いことに気づきましたか？

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

## 関数のオーバーロード
Nimの関数は、C++のようにオーバーロードが可能です。

同じ名前の関数を複数定義しても、引数の型や個数が異なっていればコンパイラが区別してくれます。

```nim
proc toString(x: int): string = ...
proc toString(x: bool): string =
  if x: result = "true"
  else: result = "false"

echo toString(13)   # toString(x: int)関数が呼ばれる
echo toString(true) # toString(x: bool)関数が呼ばれる
```

上の例では、コンパイラが引数の型を区別し、適切な方の`toString`関数を呼び出しています。

オーバーロードを使うことで、ユーザ定義関数と組み込み関数を、その差を意識することなく使うことができます。

## 演算子とオーバーロード
演算子も関数の一種です。以下のように、"``"をつけることで関数のように書くこともできます。

```nim
echo `+`(3, 4) # 7
```

演算子も、オーバーロードして独自のものを定義することができます。

```nim
proc `$` (x: myDataType): string = ...
# $演算子は本来、組み込み型にしか作用しませんが、
# 上記のようにオーバーロードすることで、ユーザ定義型であるmyDataType型でも使えるようになります。
```

なお、演算子に使える文字は以下のみです。

```
+ - * \ / < > = @ $ ~ & % ! ? ^ . |
```

演算子のオーバーロードを乱用しすぎると、可読性を損ねるので注意しましょう。