# パッケージ

Nimのパッケージシステムは[nimble](https://github.com/nim-lang/nimble)という物で管理します。

パッケージリストはGitHubで管理されています。 [nim-lang/packages](https://github.com/nim-lang/packages)

たくさんのコマンドがありますが、ここでは最低限覚える必要があるコマンドだけを解説します。

## パッケージ作成

まずはパッケージを作ってみましょう！次のコマンドを打ってみてください。

```shell
nimble init
```

実行するとぞろぞろと英文が出てきます。

例えば`/hello`というディレクトリで`nimble init`すると次のように表示されるはずです。

```shell
$ nimble init
      Info: In order to initialise a new Nimble package, I will need to ask you
        ... some questions. Default values are shown in square brackets, press
        ... enter to use them.
      Using "hello" for new package name
      Using "2vg" for new package author
      Using "src" for new package source directory
    Prompt: Package type? [lib/bin]
    Answer: _
```

いくつかの質問に答えて行くと自動的にディレクトリ構成をしてくれます。

最初の質問では「パッケージタイプはlibですか？binですか？」というものです。

`lib`はライブラリとしてNimプログラムをパッケージにする時に、`bin`は実行バイナリとしてNimプログラムをパッケージにする時と使い分けます。

ちなみに何も答えずにエンターを押したり、`lib`や`bin`以外の答えを入力すると再度`Answer: `が表示されます。

パッケージタイプを答えると、次は初期状態でのパッケージのバージョンの指定に関する質問がされます。

```shell
    Prompt: Initial version of package? [0.1.0]
    Answer: _
```

何も入力せずエンターを押すと自動的に`0.1.0`指定になります。

バージョンの質問が終わるとパッケージの簡単な説明の入力を促されます。

こちらは空でエンターすると何の説明もないパッケージとなります。

```shell
    Prompt: Package description? [A new awesome nimble package]
    Answer: _
```

お次はライセンスの選択です。

こちらはパッケージタイプの入力と同様にちゃんと選択しないといけません。

迷ったら`MIT`でいいでしょう。

```shell
    Prompt: Package License? [MIT/BSD2/GPLv3/LGPLv3/Apache2]
    Answer: _
```

最後に動作に必要なNimの最低バージョンの指定があります。

指定しない場合は今動作しているNimのバージョンが自動的に選択されます。

```shell
    Prompt: Lowest supported Nim version? [0.18.0]
    Answer: _
```

全ての入力が終わると自動的にディレクトリにファイルなどが生成されます。

`パッケージ名.nimble`、`src/パッケージ名.nim`、`tests/test1.nim`、`tests/test1.nims`というファイルなどが生成されているはずです。

今回は`hello`パッケージとします。

```shell
.
├── hello.nimble
├── src
│   └── hello.nim
└── tests
    ├── test1.nim
    └── test1.nims
```

それぞれのファイルは以下のような物です。

- `hello.nimble`

パッケージの設定ファイル。

ここに依存パッケージの情報やパッケージの概要などが書かれている。

- `src/hello.nim`

メインコードを記述する。

パッケージ内でモジュールとしてコードを分ける場合、2種類の分け方があります。

パッケージ名と同じ名前のディレクトリを作成(ここではhelloディレクトリ)し、そこにメインで使うモジュールを入れると、

`hello/モジュール名`でサブモジュールのような形で公開し、こちらも合わせて利用することが出来ます。

`private`というディレクトリを作成して、そこにメインで使うモジュールを入れると、`private`内のモジュールは公開されず、パッケージのプロジェクト内でのみ利用することが出来ます。

- `tests/test1.nim`

テスト用ファイル。

`nimble test`でパッケージのテストが実行でき、そのテスト内容をこのファイルに記述します。

- `tests/test1.nims`

test1用NimScriptファイル。

ここでのNimScriptファイルは`hoge.nim.cfg`のような設定ファイルと同じような感じですが、

実際のNimScriptは他にも多様な使い方が出来るので、別の[NimScript](/nimscript)章を参照してください。

### .nimbleファイル

nimbleファイルはパッケージのいちばん重要な設定ファイルです。

nimbleファイルの最小限の書き方は次のとおりです。

```plaintext
# これらの記述は必須項目で、1つでも欠けていると`nimble`は警告を出します。

# Package

#バージョン情報 
version     = "0.1.0"
# 作成者の名前
author      = "Your Name"
# パッケージの概要
description = "Example .nimble file."
# パッケージのライセンス
license     = "MIT"

# Deps

# 依存関係 Nimコンパイラの依存記述は必須
requires "nim >= 0.18.0"
# パッケージリストに無くてもGitHubなどに上がっていればこのように指定できる
# requires "https://github.com/2vg/mofuw >= 0.1.0"
```

`task タスク名, "概要"`と記述することで、`nimble タスク名`でそのボディに記述されたコードを実行できます。

`before タスク名`と記述するとそのタスク名のタスクが実行される前に、ボディに記述されたコードを実行実行されます。

```nim
task hello, "this is hello task.":
  echo "Hello"

before hello:
  echo "helloタスク実行前準備"

# $ nimble hello
# $ helloタスク実行前準備
# $ Hello
```

また、他にも以下のような項目があります。 [optional](https://github.com/nim-lang/nimble#optional)

- `skipDirs`: インストール時にスキップするディレクトリ名のリスト。カンマで区切れます。
- `skipFiles`: インストール時にスキップするファイル名のリスト。カンマで区切れます。
- `skipExt`: インストール時にスキップするファイル拡張子のリスト。カンマで区切れます。
- `installDirs`:
- `installFiles`:
- `installExt`:
- `srcDir` - ソースコードを含むディレクトリを指定します。デフォルトは`src`です。
- `binDir` - `nimble build`がバイナリを出力するディレクトリを指定します。デフォルトでは`bin`です。
- `bin`:
- `backend`: コンパイルに使用するバックエンドを指定します。`c`、`cc`、 `cpp`、 `objc`、 `js`が指定可能で、デフォルトは`c`です。

## パッケージのインストール