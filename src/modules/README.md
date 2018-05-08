# モジュール

Nimのモジュールシステムはとても重要な物です。

モジュールごとに空間は区切られ、コードの再利用を抽象化し、プログラミングをより簡潔に、便利にします。

## インポート、エクスポート

モジュールシステムは簡単に言うと、別のNimファイルからそのコード機能を使用したり、別のNimプログラムに自身の機能を提供することです。

別のNimファイルから機能を持ってくる事を**インポート**と言い、他のNimプログラムへ機能を提供することを**エクスポート**と言います。

インポートする時は`import モジュール名`とすることでインポートすることが出来ます。

また、カンマ`,`で区切ることで複数のモジュールを一度にインポートすることが出来ます。

逆にエクスポートする時は、関数名や型名の後ろにアスタリスク`*`を付けることでエクスポート宣言になります。

```nim
# A.nim
type
  AObject* = object
    val*: int

proc echoA1*(obj: AObject) =
  echo obj.val

proc echoA2(obj: AObject) =
  echo obj.val + 1
```

```nim
# B.nim
import A

var o = AObject(val: 1)

o.val = 2

o.echoA1 # print 2
```

`A.nim`では`Aobject`とそのフィールド`val`、そして`echoA1`をエクスポートした状態です。

`B.nim`では、`A`をインポートし、`AObject`を作成して`A`の`echoA1`を使用してしますが、

`A`のエクスポートされていない`echoA2`を利用することは出来ません。

::: tip
モジュールをインポートするとそのモジュールの型などを通常通りに使用できますが、

`モジュール名.使用する型名や関数名`とすることで、インポートした他のモジュール同士が同じ型名や関数名を定義していた時に区別できるようになります。

もしコンパイル時にどのモジュールの物か分からない場合はコンパイルエラーとなります。

また、インポートするモジュールに`import モジュール名 as 別名`としてして別名をつけることが出来ます。
:::

```nim
# A.nim
type
  AObject* = object
    val*: int

proc echoA1*(obj: AObject) =
  echo obj.val

proc echoA2(obj: AObject) =
  echo obj.val + 1
```

```nim
# C.nim
type
  AObject* = object
    val*: string

proc echoA1*(obj: AObject) =
  echo obj.val
```

```nim
# B.nim
import A
import C as cc

# valがintなのでAのAObjectと分かる
var
  ao = A.AObject(val: 1)
  co = cc.AObject(val: "Hello World")

# どちらのAObjectかわからないため、コンパイルエラーになる
# var o = AObject()

ao.echoA1 # print 1
co.echoA1 # print Hello World
```

## from

特定の型や関数のみをインポートしたい場合があると思います。

その際は`from モジュール名 import インポートしたい物`を使うことで実現できます。

もちろんここでもカンマ`,`で区切って複数選択することができます。

```nim
from A import AObject

var o = AObject(val: 1)

# AObjectのみをインポートしたのでechoA1は使用できない
# o.echoA1
```

逆にインポートしたくない物を`from モジュール名 except インポートしたくない物`として弾くことも出来ます。

そして同じくカンマ`,`で区切って複数選択することができます。

また、`from`でも`as`を使用して特定のインポートしたものに別名を付けることが出来ます。

```nim
from A as AModule import AObject

var o = AModule.AObject()

if o of AObject:
  echo "o is AObject."
```