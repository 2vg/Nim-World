# when

`when`は少し特殊で、コンパイル時に評価されます。

なので、例えばWindowsとそれ以外のプラットフォームでインポートするモジュールを分けたい時などで重宝します。

```nim
when defined(windows):
  import winlean
  echo "Windows !"
else:
  import posix
  echo "not Windows!"
```

他にも、`int`型などはシステムによって違うサイズになったりするので、こんな例もあります。

```nim
when sizeof(int) == 2:
  echo "running on a 16 bit system!"
elif sizeof(int) == 4:
  echo "running on a 32 bit system!"
elif sizeof(int) == 8:
  echo "running on a 64 bit system!"
else:
  echo "cannot happen!"
```
