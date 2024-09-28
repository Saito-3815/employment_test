const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { watch } = require('fs')
const webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: 'svg-url-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash:7][ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'js',
            target: 'es2015'
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './public/favicon.ico',
      filename: 'index.html'
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        VUE_APP_BASE_URL: JSON.stringify(process.env.VUE_APP_BASE_URL || '/')
      }
    })
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
        watch: true
      },
      {
        directory: path.join(__dirname, 'src/assets/markdown'), 
        publicPath: '/markdown', 
        watch: true
      }
    ],
    historyApiFallback: {
      rewrites: [
        { from: /./, to: path.posix.join('/', 'index.html') }
      ]
    },
    compress: false,
    port: 3000,
    hot: true,
    host: '0.0.0.0' // すべてのネットワークインターフェースでリッスン
  }
}
