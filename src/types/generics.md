# ジェネリクス


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

そうすると今度は次のタプル型を要素とする配列をソートさせたくなります。

```nim
type
  # Person = tuple[name: string, age: int]
  Person = tuple
    name: string
    age: int
```

これらの作業を延々と繰り返していくと各々の型に対応する似たようなコードが量産されてしまします。Nim はジェネリクスによってこうしたことを避けることができます。
ジェネリクスを使うことで、関数の引数の型をパラメータ化し、次のように型に関して抽象的なプログラムを行うことができます。

```nim
# sample.nim
proc swap[T](a, b: var T) =
  var tmp = a
  a = b
  b = tmp

proc reverse[T](arr: var openArray[T]) =
  var x = 0
  var y = arr.high
  while x < y:
    swap(arr[x], arr[y])
    dec(y)
    inc(x)

var intArr = [1, 2, 3, 4, 5]
reverse(intArr) # reverse[int](intArr) でも良い
echo intArr # [5, 4, 3, 2, 1]

var msg = "miN morf olleH"
reverse(msg) # reverse[char](msg) でも良い
echo msg # Hello from Nim
```

この場合、Nim はコンパイルの際に型を推定しコードを展開します。実際、コンパイル時に生成される C のコード (nimcache/sample.c) を見ると、 `int` と `char` 各々の場合に対応した `reverse` および `swap` のコードが生成されており、各々の関数が適切に呼び出される様子が確認できます。コンパイラは賢いですね。


補足ですが、`swap` はすでに Nim に組み込まれており定義する必要はありません。また `reverse` は標準ライブラリ [`algorithm`](https://nim-lang.org/docs/algorithm.html) モジュールをインポートすることで利用できます。

さらにジェネリクスはイテレータでも使うことができます。コードは[ここから](https://hookrace.net/blog/introduction-to-metaprogramming-in-nim/#inline-iterators)引用しました。

```nim
iterator reverseItems[T](x: T): auto =
  for i in countdown(x.high, x.low):
    yield x[i]

for c in reverseItems("foo"):
  echo c # o, o, f の順に出力される

var arr = [0, 1, 2]
for c in reverseItems(arr):
  echo c # 2, 1, 0 の順に出力される
```
