# if

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