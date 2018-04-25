# 序数型

## 数値型

* 符号付き整数 `int8`, `int16`, `int32`, `int64`, `int` \(`int`はポインターのサイズと同じです\)
* 符号無し整数 符号付き整数の型の先頭それぞれに`u`を付けた物

それぞれのデータの最後に`'i32`, `'u64`のようなサフィックスをつけることでデータのサイズを変更することが出来ますが、通常必要はありません。

型推論では、通常のint型は`low(int32)`から`high(int32)`の範囲の値で、それ以外は`int64`になります。

また、`0xXX`, `0oXX`,  `0bXX or 0BXX`を使用することでそれぞれ16進数、8進数、2進数を表すことが出来ます。

アンダースコア`_`を使うことで可読性を上げることもできます。

```nim
var
  a: int = 0x0A
  b: int64 = 127'i64
  c = 0o10
  d = 0b0101_0101
```

`int`はマシンのポインタサイズに依存するので、例えばサイズごとに異なる挙動をさせたりすることが可能です。

```nim
const ptrSize = sizeof(int)

when sizeof(int) == 2:
  echo "running on a 16 bit system!"
elif sizeof(int) == 4:
  echo "running on a 32 bit system!"
elif sizeof(int) == 8:
  echo "running on a 64 bit system!"
else:
  echo "cannot happen!"
```

## 文字型

* 文字 `char` 基本的に`uint8`のエイリアスタイプです

`char`のサイズは1バイトなので、普通はUTF-8を扱うことは出来ないのですが、Nimは結果的にUTF-8を適切に処理することができます。

内部で`array[char, int]`や`set[char]`の型を使用して効率的に処理しています。

また、[unicode](https://nim-lang.org/docs/unicode.html)モジュールを使用することで`Rune`型が使用できるようになり、それは任意のUnicode文字を直接表現することができます。

## ブーリアン型

Nimのブーリアン型は、`true`と`false`の2種類のみです。

主に条件分岐で使用します。

```nim
const boo = 0
if boo == 0:
  echo "boo is 0"
else:
  echo "boo is " & boo
```

## 列挙型



