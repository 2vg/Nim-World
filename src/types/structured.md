# 構造化型

## 配列型とシーケンス型

- 配列 `array[size, T]`
- シーケンス `seq[T]`

配列型は、コンパイル時に指定されたサイズで固定され、指定された型をそれぞれの要素に持ちます。

各要素には`[]`演算子にインデックス数値を指定することでアクセスでき、文字列型と同じように`[X .. Y]`でスライスが可能です。

また、型宣言以外に配列コンストラクタ`[]`を使用して初期化することも出来ます。

この時配列は型推論が可能で、最初の型の要素から推論され、他のすべての要素は最初の型に暗黙的に変換できる必要があります。

シーケンス型は、配列と似ていますが、実行後もサイズが変更可能な配列です。

配列型と同じく`[]`演算子を使って任意のインデックス値の値を取得したりスライスすることが出来ます。

ちなみに、スライスされて返される配列はシーケンス型です。これは文字列型や配列型でも同じです。

シーケンス型のコンストラクタは`@[]`を使って初期化出来ます。

シーケンス型を作成する別の方法で、`newSeq()`関数を使うことも出来ます。

```nim
var
  intArray: array[8, int] = [0, 1, 2, 3, 4, 5, 6, 7]
  intSeq: seq[int] = [0, 1, 2, 3]

echo intArray[0] # 0
echo intArray[0 .. 3] # @[0, 1, 2, 3]

intArray[7] = 8

echo intArray # [0, 1, 2, 3, 4, 5, 6, 7, 8]

# intArray[8] = 9 <- when comment out, can not compile because intArray's size is 8.

echo intSeq # @[0, 1, 2, 3]

intSeq.add(4)

echo intSeq # @[0, 1, 2, 3, 4]
```

## タプル型とオブジェクト型

タプル型とオブジェクト型は、指定型と様々な名前付フィールドが定義されたストレージコンテナです。

タプルはフィールドの順序も定義する必要があり、ほとんどオーバーヘッドがありません。

タプルコンストラクタ`()`でタプルを作成することができます。

コンストラクタ内のフィールド順序はタプル型の定義と一緒である必要があります。

タプル型は通常`tuple[T]`で定義します。

ですが、宣言時はオブジェクト型との一貫性を保つためにインデントで定義することも可能です。

オブジェクト型は、タプル型より多くの機能を持っており、継承と情報隠蔽があります。

また、オブジェクト型は実行時に型にアクセスできるので、`of`演算子を使ってオブジェクトの型を判断できます。

```nim
type
  # Person = tuple[name: string, age: int]
  Person = tuple
    name: string
    age: int

  # RootObjを継承しないとfinalオブジェクトとなり継承不可
  # ただし、{.inheritable.}を使うことで回避可能
  Human = object of RootObj
    name: string
    age: int

  Child = object of Human
    toy: string

var
  # p1はPerson型と一緒のタプル
  p1 = (name: "john", age: 20)
  p2: Person = (name: "an", age: 18)
  h1 = Human(name: "mofu", age: 5)
  c1 = Child(name: "mfchan", age: 1, toy: "computer")

echo p1.name & " love " & p2.name
echo "my name is " & h1.name

echo c1.name & " have the " & c1.toy

if c1 of Human:
  echo "c1 is subset of Human."
```

## Open arrays

`Open arrays`は、関数のパラメータの型としてのみ使用することが出来ます。

定義の仕方は`openArray[T]`です。

これは固定サイズである配列`array[N, T]`をより柔軟に引数にすることができ、非常に便利です。

もちろん、可変長配列`seq[T]`を受け取ることも可能です。

```nim
var a: array[4, char] = ['t', 'e', 's', 't']

proc aEcho(arr: openArray[char]) =
  for i, v in arr:
    echo "index " & $i & " is " & v

a.aEcho
```

## Varargs

`Varargs`は、`Open arrays`と同じく関数のパラメータとしてのみ使用することができます。

これは関数の最後の引数の型としてのみ使うことができ、引数を暗黙的に配列に変換します。

```nim
proc myWriteln(f: File, a: varargs[string]) =
  for s in items(a):
    write(f, s)
  write(f, "\n")

myWriteln(stdout, "abc", "def", "xyz")
# これはこの形に変換されます
# myWriteln(stdout, ["abc", "def", "xyz"])
```