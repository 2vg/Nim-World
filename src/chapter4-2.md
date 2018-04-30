# case文

`case`は、他言語で言う`switch`のようなものです。

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