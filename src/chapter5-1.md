### while

Nimの`while`文は他の言語とほぼ同じ感じです。

```nim
var num = 0

while num < 10:
  echo num
  inc(num)

# echo 0 ~ 9

#while true:
#  echo "danger !"
#  echo "this is infinity loop !"
```

`inc()`は引数をインクリメントする関数です。