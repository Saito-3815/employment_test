FROM node:20-alpine

# メンテナーのラベルを追加
LABEL maintainer="sai.engineer3815@gmail.com"

# コマンドを実行するディレクトリを作成
WORKDIR /usr/src/app

# 依存関係ファイルをコピー
COPY app/package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY app .

# ポートを公開
EXPOSE 3000

# npm run devを実行
CMD ["npm", "run", "dev"]