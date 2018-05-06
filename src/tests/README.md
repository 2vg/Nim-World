# テスト
Nimでは`unittest`というテストに便利なモジュールがあります。

これを使用してテストを記述することが可能です。

更に詳しい使い方はモジュールのドキュメントを参照しましょう。 [unittest](https://nim-lang.org/docs/unittest.html)

```nim
import unittest

suite "テストはスイートごとにまとめることができます":
  # setupは各テストが始まる前に実行されます
  setup:
    echo "\n----テストを始める前の準備----\n"

  # teardownは各テストが終わった後に実行されます
  teardown:
    echo "\n----テストが終わりました----\n"
  
  test "テスト1: 通過必須テスト":
    # requireでチェックすると、
    # falseだった時にこれ以上のテストを行わずに終了します。
    require(true)

  test "テスト2: チェックポイント":
    # checkはテストを通過しなかったらその部分を表示するシンプルな関数
    check(1 != 1)
    check("asd"[2] == 'd')

  test "配列のインデックス外アクセスチェック":
    let seqArr = @[1,2,3]

    # exceptステートメントで指定例外が発生するかチェックします
    # 指定例外が発生するとOKになります
    # こうしたら例外が飛ぶはず、というチェックに役立ちます
    expect(IndexError):
      echo seqArr[4]

  echo "\nテストを終了します...END\n"
```