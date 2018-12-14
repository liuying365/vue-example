'use strict'
const path = require('path')
const utils = require('./utils')
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const spinner = ora('Theme大招蓄力中！')
spinner.start()

const obj = {
  entry: {
    app: './src/style.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [{
                loader: "css-loader"
            },{
                loader: "sass-loader"
            }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
        filename: utils.assetsPath('../theme/style.css')
    }),
    new OptimizeCSSPlugin({
        cssProcessorOptions: { safe: true, map: { inline: false } }
    }),
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

rm(path.join(path.resolve(__dirname, '../theme')), err => {
    if (err) throw err
    webpack(obj, (err, stats) => {
      spinner.stop()
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + '\n\n')
  
      if (stats.hasErrors()) {
        console.log(chalk.red('  Theme大招蓄力失败！\n'))
        process.exit(1)
      }
  
      console.log(chalk.cyan('  Theme大招蓄力完成！\n'))
      console.log(chalk.yellow('  Theme释放大招！\n'))
    })
  })
