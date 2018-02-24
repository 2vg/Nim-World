# ⚡ Nimの構文

このセクションからは、Nimの世界をより深く知ってもらうための基本的な物が書かれています。

ゆっくり見ていきましょう。

また、インデントに関しては公式で二文字が推奨されているので、

私達も二文字で書いていきたいと思います。

## 変数

Nimの変数宣言は三種類あります。

変数  |再代入 | 
-----|------|
var  |可能   |
let  |不可能 |
const|不可能 |

おっと！ これでは`let`と`const`の違いが分かりません！

どちらも定数ではありますが、

`let`はコンパイル時に値が決まって無くても良く、

`const`はコンパイル時に値が決まってなければなりません。

分かりやすい例では、以下のようなコードです。

```nim
let x = readLine(stdin)
const x = readLine(stdin)
```

> %tip%
> Tip
> 
> `readLine(stdin)`は標準入力から何かを受け取る時に使う関数です。

残念ながら、このコードはコンパイル出来ません。

ユーザーが入力するのはコンパイルされた後なので、`const`の中身がコンパイル時に決まらないからです。

なので、時と場合によって上手く使い分ける必要があります。

`var`は再代入可能な変数宣言で、何度でも値を入れ替える事ができます。

```nim
var x = 0
x = 1

# this is error !
# let x = 0
# x = 1
```

> %tip%
> Tip
> 
> Nimには型推論があり、型を省くことが出来ます。
>
> (明示的に型を指定しなければならない場合もある)

また、変数宣言は複数まとめてすることも出来ます。

```nim
var
  a = "apple"
  b = "banana"
```

> %note%
> おまけ
> 
> 変数宣言で扱える文字範囲があり、こんな宣言も出来ます :)

```nim
var マジ卍 = "ﾏｼﾞ ﾏﾝｼﾞｨｨｨｨｨ!!!!!"
```

## 文字列

Nimの文字列はダブルクォート`"`で囲みます。

シングルクォート`'`は文字と評価されてしまいます。

文字列は`echo`関数で標準出力に表示させることが出来ます。

```nim
echo "Hello, World!"
```

また、日本語などのマルチバイトも扱うことができます。

```nim
echo "こんにちは🌏"
```

生の文字列は`r""`とすることで表現でき、エスケープシーケンス文字も無視されます。

```nim
echo r"Hello, \n World!" # Hello, \n World!
```

文字列中に`\n`と書くことで改行を入れることが出来ますが、

ダブルクォートを三重にすることで、改行をそのまま表現できます。

```nim
echo """Hello,
World
!"""
```

文字の連結は、`&`演算子で連結することが出来ます。

```nim
echo "Hello, " & "World!"
```

標準入力は、`readLine(stdin)`をコールすることでユーザーからの入力を取得できます。

```nim
echo "こんにちは！ あなたの名前を教えてください！"
let recv = readLine(stdin)
echo "ようこそ、" & recv & "さん！"
```

また、文字列は`[]`演算子を使って任意のインデックスの文字を取得できます。

一文字だけではなく、スライスのような形で一部の文字列を取得することも出来ます

```nim
echo "Hi !"[3] # !
echo "The Quick Brown Fox"[4 .. 8] # Quick
```

## 条件分岐

Nimで条件によって処理を変えたい場合は、

`if`、`case`、`when`を使う方法があります。

### if文

Nimのifは`if-elif-else`のような構文で書きます。

```nim
var
  a = "apple"
  b = "banana"

if a == b:
  echo "apple is banana :)"
elif a != b:
  echo "appppple 🍎"
  echo "banaaana 🍌"
else:
  echo "See you"
```

また、式としても評価することができ、

変数への代入で使用することも出来ます。

```nim
let
  fruit = "🍎"

var eat =
  if fruit == "🍎":
    "eating 🍎"
  else:
    "something want to eat..."

echo eat # "eating 🍎"
```

### case文

`case`は、多言語で言う`switch`のようなものです。

`case`を宣言した後に評価したい物を書き、

`of`を使って分岐していきます。

```nim
var fruit = "apple"

case fruit
of "apple":
  echo "apppooooo!"
else:
  echo "not apple"

# 動作は同じですが、caseでインデントもできます
case fruit:
  of "apple":
    echo "appow!"
  else:
    echo "not apple"
```

if文と同じく、変数代入時でも使うことが出来ます。

```nim
let
  fruit = "🍎"

var eat =
  case fruit
  of "🍎":
    "eating 🍎"
  else:
    "something want to eat..."

echo eat # "eating 🍎"
```

### when文

`when`は少し特殊で、コンパイル時に評価されます。

なので、例えばWindowsとそれ以外のプラットフォームでインポートするモジュールを分けたい時などで重宝します。

```nim
when defined(windows):
  import winlean
else:
  import posix
```

他にも、`int`型などはシステムによって違うサイズになったりするので、こんな例もあります。

```nim
when sizeof(int) == 2:
  echo "running on a 16 bit system!"
elif sizeof(int) == 4:
  echo "running on a 32 bit system!"
elif sizeof(int) == 8:
  echo "running on a 64 bit system!"
else:
  echo "cannot happen!"
```

## ループ

Nimのループは、

`for`、`while`の二種類があります。

### for文

Nimの`for`は、Pythonと似ています。

まずは例を見てみましょう。

```nim
for i in countup(0, 10):
  echo i
```

これは0から10までを標準出力に表示する物です。

`in`の後にはイテレータである`countup`がコールされています。

`countup`は`0 .. 10`と書くこともでき、

`0 ..< 10`とすると10を含まない呼び出しになります。

```nim
for i in 0 ..< 10:
  echo i # 0 ~ 9
```

また、配列の中身を一つずつ取り出すことも出来ます。

```nim
let str = "Hello"

for ch in str:
  echo ch

# H
# e
# l
# l
# o
```

### while文

## 配列

## 型

Nimの型は様々でとても多いですが、順番にゆっくり見ていきましょう。

### プリミティブ型

まずは基本的な型から見ていきましょう！

#### Boolean

NimのBoolean型には、`true`と`false`の二種類だけです。

評価するための演算子は、

`==`, `!=`, `<`, `>`, `<=`, `=>` に加えて、

`and`, `not`, `or`, `xor` もあります

```nim
var
  x = 0
  y = 1

if x == y:
  echo "x and y is same value."
elif x != y:
  echo "x and y is not same value."
```

## 関数

## オブジェクト