# Github への gpg キーの登録

## gpg キーの確認

ローカル環境でgpgキーを作成する。作成後、以下コマンドで公開鍵をコピーする。

gpg --list-secret-keys --keyid-format LONG

以下の出力内容のsec ed25519/E830234BF8BAECB0の後ろに表示されているキーID（例ではE830234BF8BAECB0）をメモする。

[keyboxd]

sec   ed25519/E830234BF8BAECB0 2024-09-26 [SC]
      E830234BF8BAECB0214AB9C91A915A2BB77F7534
uid           [ultimate] hoge (for_employment_test) <hogehoge@gmail.com>
ssb   cv25519/6F7AC0D6623456DE 2024-09-26 [E]

次に、以下のコマンドで公開鍵をコピー。

gpg --armor --export E830234BF8BAECB0

以下のような公開鍵が表示されるので、この内容を全てコピーする。

-----BEGIN PGP PUBLIC KEY BLOCK-----

...（省略）...

-----END PGP PUBLIC KEY BLOCK-----

## GitHub へ公開鍵を登録

GitHubにログインし、右上のプロフィールアイコンをクリックして「Settings」（設定）を選択。

左サイドバーの「SSH and GPG keys」をクリック。

「New GPG Key」ボタンをクリック。

keyの名前を設定し、コピーした公開鍵を「Key」フィールドに貼り付け。

「Add GPG Key」ボタンをクリックして、公開鍵を保存。

## Gitの設定で署名付きコミットを有効化

GitHubにGPGキーを登録したら、Gitで署名付きコミットを自動的に行うよう設定する。ターミナルで次のコマンドを実行。

git config --global user.signingkey E830234BF8BAECB0
git config --global commit.gpgSign true

## 署名付きコミットの確認

署名付きコミットを確認するため、以下のようにコミットする。

git commit -S -m "Your commit message"

GitHub上でコミットを確認すると、「Verified」と表示され、署名付きコミットが正しく行われたことがわかる。

これでGitHubへのGPGキーの登録が完了し、署名付きコミットが可能となる。

### 署名付きコミットが失敗した場合

gpg: 署名に失敗しました: Inappropriate ioctl for deviceというエラーメッセージが出力した場合、GPGがPINの入力を必要としているが、端末や環境が正しく対応できていない。

以下の手順で問題を解決する。

### GPG設定ファイルに「Pinentry」モードを指定

Pinentryが正しく動作しない場合、gpg-agentが使う「Pinentry」プログラムを「ttyモード」に設定することで、ターミナル上でPIN入力が求められるようになる。

まず、~/.gnupg/gpg-agent.confファイルに以下の行を追加または確認する。このファイルが存在しない場合は、新しく作成してこの行を追加。

pinentry-mode loopback

### GPGを「loopback」モードで動作させるよう設定

以下コマンドを入力し、Gitの設定でGPGがloopbackモードを使用するように指定。これにより、PINの入力が正しく処理される。

git config --global gpg.program $(which gpg)

git config --global commit.gpgSign true

git config --global gpg.format openpgp

次のコマンドで「loopbackモード」を有効化。

export GPG_TTY=$(tty)

gpg --use-agent --pinentry-mode loopback

この設定により、GPGが正しくターミナルでPINを要求するようになる。

### 再起動の確認

pg-agentがまだ動作している場合、再起動が必要。以下のコマンドを使用してgpg-agentを再起動。

gpgconf --kill gpg-agent

gpgconf --launch gpg-agent

### テスト

再度署名付きコミットを試して確認する。

git commit -S -m "Your commit message"
