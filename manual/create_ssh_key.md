# ed25519 形式の ssh キーの作成

## SSHキーを生成するコマンドを実行

ターミナルで以下のコマンドを入力する

ssh-keygen -t ed25519

## キーの設定

上記コマンドの出力による以下の各結果を確認、および適切に設定する。

### Generating public/private ed25519 key pair

公開鍵と秘密鍵のペアを生成する確認メッセージ。Enter キーを押す。

### Enter file in which to save the key (/ユーザーディレクトリ名/.ssh/id_ed25519)

鍵を保存するファイルのパスの設定。デフォルトのパスを使用する際は空のまま Enter キーを押す。

### Enter passphrase (empty for no passphrase)

パスフレーズの設定。パスフレーズを設定することで、鍵のセキュリティが向上する。パスフレーズを設定しない場合はEnterキーを押す。

### Enter same passphrase again

上記で設定したパスフレーズを再度入力して確認。

### Your identification has been saved in /ユーザーディレクトリ名/.ssh/id_ed25519

秘密鍵が指定されたパスに保存されたことを示すメッセージ。Enter キーを押す。

### Your public key has been saved in /ユーザーディレクトリ名/.ssh/id_ed25519.pub

公開鍵が指定されたパスに保存されたことを示すメッセージ。Enter キーを押す。

### The key fingerprint is: SHA256:eGELVHpiTY4tVVIzkbpOs1syUryq9gr6JKrTNJN0q6o

鍵のフィンガープリント（SHA256形式）を表示。これは鍵の一意性を確認するために使用される。Enter キーを押す。

### The key’s randomart image is

鍵のランダムアートイメージを表示。これは視覚的に鍵の一意性を確認する.Enter キーを押しキーの作成を終了する。

## 作成したキーの確認

以下のコマンドをターミナルで入力して作成したキーが存在するか確認する

ls .ssh/id_ed25519*

出力結果例:

.ssh/id_ed25519 .ssh/id_ed25519.pub
