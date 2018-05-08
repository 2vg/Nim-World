# ジェネリクス

## 前置き

あるプログラマーが次のような関数を書いたとします。

```nim
proc swapTwoInt(a, b: var int) =
  var tmp = a
  a = b
  b = tmp

proc reverseIntArray(arr: var openArray[int]) =
  var x = 0
  var y = arr.high
  while x < y:
    swapTwoInt(arr[x], arr[y])
    dec(y)
    inc(x)
```

この関数を使うと整数を型とする配列を逆順にソートさせることができます：

```nim
var intArr = [1, 2, 3, 4, 5]
reverseIntArray(intArr)
echo intArr # [5, 4, 3, 2, 1]
```

では、文字列 `var msg = "miN morf olleH"` を逆順にソートさせたい場合はどうでしょう？ `swap` `reverseIntArray` をよく見ると型 `int` に依存しない実装になっていますので `int` の部分を `char` に置換したコードを活用できそうです。

```nim
proc swapTwoChar(a, b: var char) =
  var tmp = a
  a = b
  b = tmp

proc reverseMsg(a: var openArray[char]) =
  var x = 0
  var y = a.high
  while x < y:
    swapTwoChar(a[x], a[y])
    dec(y)
    inc(x)

var msg = "miN morf olleH"
reverseMsg(msg)
echo msg # Hello from Nim
```

期待した動作をしてくれます。今度は、次のタプル型を要素とする配列をソートしたいとします。

```nim
type
  # Person = tuple[name: string, age: int]
  Person = tuple
    name: string
    age: int
```

また同じようなコードを書けば良いですが、各々の型に対応する似たようなコードを書くのは退屈な作業ですしコードの保守の観点からもよくありません。これらの作業は Nim が目指そうとする「効率」「表現力」「優雅さ」に反することになります。Nim はジェネリクスによってこうした退屈な作業を避けることができます。

