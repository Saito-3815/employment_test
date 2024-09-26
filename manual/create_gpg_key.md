# ed25519 形式の GPG キー の作成

## GPGのインストール

GPGがインストールされていない場合は、以下のコマンドでインストールする。

Homebrew:

brew install gpg

完了したら以下コマンドでインストールを確認する。

gpg --version

## GPG キーの作成

GPGキーを生成するために、以下のコマンドを実行。

gpg --full-generate-key

## キー設定

プロンプトが表示されたら、キータイプとしてed25519を選択。以下のように進める。

プロンプトで鍵の種類を選択する際に、(9) ECC and ECC (sign and encrypt) を選択

使用する曲線を選ぶように求められたときに、(1) Curve 25519 *デフォルトを選択。

キーの有効期限を設定。必要に応じて期限を設定し、0を入力して無期限にすることもできる。

「これで正しいですか？」と聞かれたら、yを入力。

## ユーザー情報の入力

名前、メールアドレス、コメントを入力。これらの情報はキーに関連付けられる。

## パスフレーズの設定

キーの保護のためにパスフレーズを設定。確認用に再度入力し、OK を選択。

## 鍵の確認

キーが生成されたら、以下のコマンドで確認する。

gpg --list-keys