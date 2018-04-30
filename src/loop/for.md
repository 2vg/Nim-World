# for

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