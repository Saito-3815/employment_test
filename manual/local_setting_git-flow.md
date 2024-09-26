# git-flow のローカル設定

git がすでにインストールされていること、およびmac OS環境で設定することを前提とする。

## git-flow のインストール

ターミナルで以下のコマンドを実行。

Homebrew:

brew install git-flow-avh

Macports:

port install git-flow-avh

## Git-flowの初期化

プロジェクトディレクトリに移動し、以下のコマンドを入力してGit-flowを初期化。

git flow init

## Git-flowの設定

上記コマンドの結果として以下の各質問が出力されるので適切に設定する。

### Productionリリース用のブランチ

Which branch should be used for bringing forth production releases?

- main

Branch name for production releases: [main]

本番環境にリリースするためのブランチを指定する。設定なしで Enter キーを押すとデフォルトの main ブランチが使用される。

### 次のリリース開発用のブランチ

Branch name for "next release" development: [develop]

次のリリースの開発を行うブランチを指定する。設定なしで Enter キーを押すとデフォルトの develop ブランチが使用される。

### サポートブランチのプレフィックス

How to name your supporting branch prefixes?

Feature branches? [feature/]

Bugfix branches? [bugfix/]

Release branches? [release/]

Hotfix branches? [hotfix/]

Support branches? [support/]

各種サポートブランチのプレフィックスを指定する。設定なしで Enter キーを押すと上記コマンド末尾のデフォルトが使用される。

Feature branches: 新機能の開発用ブランチ

Bugfix branches: バグ修正用ブランチ

Release branches: リリース準備用ブランチ

Hotfix branches: 緊急バグ修正用ブランチ

Support branches: サポート用ブランチ

### バージョンタグのプレフィックス

Version tag prefix? []

バージョンタグのプレフィックスを指定する。通常はデフォルトの空のままにする。設定なしで Enter キーを押す。

### フックとフィルターディレクトリ

Hooks and filters directory? [/プロジェクトのディレクトリ名/.git/hooks]

Gitフックとフィルターのディレクトリを指定する。デフォルトは .git/hooks ディレクトリが使用される。

## branchの状態を確認

以下のコマンドを入力してbranchの状態を確認

git branch

実行結果が下記の様になっていれば設定完了。

\* develop

  master

developブランチが表示されない場合は、リモートリポジトリに一切データが無い場合。developブランチを切る場合は、下記コマンドを実行。

git push origin develop
