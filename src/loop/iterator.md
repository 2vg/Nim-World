# iterator

イテレータ`iterator`は`for`や`while`とともに使うことが出来ます。

ループごとに値を反復処理するのを便利にします。

`iterator`で定義し、値を返す際に`return`の代わりに`yield`を使います。

```nim
iterator countup(a, b: int): int =
  var s = a
  while s != b:
    yield s
    inc(s)

for i in countup(0, 5):
  echo i
```

また、`iterator`を変数に入れて`finished`でチェックすることで`while`を使ってこのように書くことが出来ます。

イテレータは最後の値が返った後に呼ばれた後に終了状態になるため、`not finished(イテレータ)`では1つ余分にループが周ります。

```nim
iterator mycount(a, b: int): int {.closure.} =
  var s = a
  while s != b:
    yield s
    inc(s)

let c = mycount

# while not finished(c):
#   echo c(0 ,5)
#
# 0
# 1
# 2
# 3
# 4
# 0 <- intのデフォルト値である0

while true:
  let value = c(0, 5)
  if finished(c): break
  echo value
```
