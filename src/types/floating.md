# 浮動小数点型

* 浮動小数点 `float32`, `float64` `float,` \(`float`は、プロセッサの最高速浮動小数点型のサイズになります。\)

サフィックスは`'f32`, `'f64`です。

```nim
var
  nF32 = 123'f32
  nF64 = 0.0000000000001e308
```

x86アーキテクチャでは浮動小数点演算の結果は演算をコンパイル時に行うか実行時に行うかによって変化する可能性があることに注意してください。

```nim
const foo = 0.2'f32
echo foo - 0.2 # => 0.0

let bar = 0.2'f32
echo bar - 0.2 # => 2.980232227667301e-09
```

基本的には浮動小数点の演算を同値比較するべきではありません。以下のようにどの程度の誤差を許容するか、という観点で処理を行うべきです。

```nim
# Procedure of approx equal.
proc `=~` *(x, y: float, eps: float = 1.0e-7): bool =
  result = abs(x - y) < eps

doAssert bar != 0.2
doAssert bar =~ 0.2
```
