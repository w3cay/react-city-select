/*eslint-disable*/
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const InlineChunkWebpackPlugin = require('html-webpack-inline-chunk-plugin');
// 引入 Html 处理
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入 CSS 处理
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 引入 JS 处理
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
// 引入进度查看
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var chalk = require('chalk');
// 获取本地 ip 地址
var localAddress = require('ip').address();
// 去除警告提示
process.noDeprecation = true;

console.log(`▶️  当前环境：${process.env.NODE_ENV}, 开始构建... 🚀  `);

// 根据当前 src 获得项目路径
let rootDir = __dirname.substr(0, __dirname.indexOf('src'));
let buildPath = __dirname + '/example';

// 设置 DEBUG 环境变量,用于环境判断
const DEBUG = process.env.NODE_ENV === 'development';

// =================================    基础配置    =================================   


// babel 配置项
const babelOptions = {
    "presets": [
        ["es2015", {
            "modules": false
        }],
        "react"
    ],
};

const commonConfig = merge([{
    entry: {
        index: [process.env.NODE_ENV == 'release' ?'./lib/index' : './src/index.js' ],
    },
    module: {
        rules: [{
                // 对 js/jsx 文件的处理
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions,
                }
            }, {
                // 对 scss/css 文件的处理
                test: /\.scss$|\.css$/,
                loader: [
                    'style-loader', 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]', 'sass-loader', 'postcss-loader'
                ],
            }, {
                test: /\.html$/,
                use: ['raw-loader'],
                exclude: /node_modules/
            }, {
                // 处理图片
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                exclude: /node_modules/,
                loaders: [{
                    loader: 'url-loader',
                    query: {
                        limit: 10000,
                        name: 'img/[name].[ext]?[hash:8]',
                    }
                }, {
                    loader: 'image-webpack-loader',
                    query: {
                        mozjpeg: {
                            progressive: true
                        },
                        bypassOnDebug: DEBUG,
                        pngquant: {
                            quality: '75-90'
                        }
                    }
                }]
            },
            // 处理字体文件
            {
                test: /\.(ttf|woff|woff2)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'font/[name].[ext]?[hash:8]',
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    precss(),
                    autoprefixer({
                        browsers: [
                            'Android >= 4', 'iOS >= 7.1'
                        ],
                    }),
                ]
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.LoaderOptionsPlugin({
            debug: DEBUG
        }),
    ],
    resolve: {
        extensions: [
            '.js', '.jsx'
        ], //后缀名自动补全
        modules: ["libs", path.join(rootDir, "node_modules"), "node_modules"],
    },
}]);



// =================================    发布配置    =================================   


const productionConfig = merge([{
    watch: false,
    cache: false,
    output: {
        path: buildPath,
        filename: "js/[name].bundle.js?[chunkhash:8]",
        publicPath: ''
    },
    stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: true,
        modules: false,
        publicPath: false,
        timings: false,
        version: false,
        warnings: true,
        colors: {
            green: '\u001b[32m'
        }
    },
    plugins: [
        new UglifyJSPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true
            }
        }),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false,
            callback: function () {
                setTimeout(() => {
                    process.exit();
                }, 0);
            },
        }),
        // 处理 html 文件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: true,
            hash: false, // 是否增加资源文件指纹 hash
            minify: {
                collapseWhitespace: true, // 去除多余空格
                preserveLineBreaks: true,
                html5: true,
                minifyJS: true, // 是否压缩 js
            },
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["vendor", "manifest"],
            minChunks: Infinity,
        }),
        new ExtractTextPlugin('css/styles.css?[contenthash:8]'),
        new InlineChunkWebpackPlugin({
            inlineChunks: ['manifest']
        }),
        new webpack.HashedModuleIdsPlugin(),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        })
    ]
}]);


// =================================    开发配置    =================================   


const developmentConfig = merge([{
    watch: true,
    cache: true,
    output: {
        path: buildPath,
        filename: 'js/[name].bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: buildPath,
        clientLogLevel: 'none',
        hot: true,
        compress: true,
        host: localAddress, // 本地调试地址
        overlay: true, // 输出编译报错在 window 上
        disableHostCheck: true,
        stats: {
            assets: true,
            colors: true,
            version: true,
            hash: true,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false,
        },
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}]);


const releaseConfig = merge([{ 
    watch: false,
    cache: false,
    output: {
        path: __dirname + '/dist',
        filename: "main.js",
        publicPath: '',
        libraryTarget: "umd",
        library: 'react-city-select',
    },
    externals: {
        react: 'react',
    },
    stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: true,
        modules: false,
        publicPath: false,
        timings: false,
        version: false,
        warnings: true,
        colors: {
            green: '\u001b[32m'
        }
    },
    plugins: [

        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
            clear: false,
            callback: function () {
                setTimeout(() => {
                    process.exit();
                }, 0);
            },
        }),
        new ExtractTextPlugin('styles.css'),
        new webpack.HashedModuleIdsPlugin(),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        })
    ]
}]);


// =================================    合并配置输出    =================================

if (process.env.NODE_ENV == 'release') {
    module.exports = merge(commonConfig, releaseConfig);
} else {
    if (DEBUG) {
        module.exports = merge(commonConfig, developmentConfig);
    } else {
        module.exports = merge(commonConfig, productionConfig);
    }
}