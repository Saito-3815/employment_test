# dev server 起動後に localhost:3000 にアクセスできない場合の対処

## 原因

`webpack-dev-server` が `localhost` でのみリッスンしているため、友人からのアクセスなどの外部からのアクセスを許可するには、hostオプションを追加する必要がある。

## 対処方法

1. `webpack.config.js` ファイルに以下の設定を追加。

    ```javascript
    module.exports = {
      // 他の設定
      devServer: {
        host: '0.0.0.0', // ←追加。すべてのネットワークインターフェースでリッスン。
        port: 3000,
      },
    };
    ```

2. Dockerコンテナを再ビルドして再起動。

    ```bash
    docker compose up --build -d
    ```

これにより、`localhost:3000` で `dev server` にアクセスできる。
