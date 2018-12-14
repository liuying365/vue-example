'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = require('../config/prodTest.env')

const webpackConfig = merge(baseWebpackConfig, {
  /* UI打包入口文件 */
  entry: {
    app: './src/index.js'
  },
  /* UI打包入口文件 */
  devtool: config.buildTest.productionSourceMap ? config.buildTest.devtool : false,
  output: {
    path: config.buildTest.assetsRoot,
    // 再次增加一个变量目录
    publicPath: config.buildTest.assetsPublicPath,
    filename: config.buildTest.filename,
    // 库名称
    library: config.buildTest.library,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  // 增加一个配置，支持不同的加载方式
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.buildTest.productionSourceMap,
      parallel: true
    })
  ]
})

if (config.buildTest.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
module.exports = webpackConfig
