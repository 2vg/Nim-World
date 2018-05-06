# パッケージ

Nimのパッケージシステムは[nimble](https://github.com/nim-lang/nimble)という物で管理します。

パッケージリストはGitHubで管理されています。 [nim-lang/packages](https://github.com/nim-lang/packages)

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

**作業途中**