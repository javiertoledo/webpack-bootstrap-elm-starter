const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/assets/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    mode: 'development',
    devServer: {
        inline: true,
        contentBase: './dist/'
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/assets/index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader' // inject CSS to page
            }, {
                loader: 'css-loader' // translates CSS into CommonJS modules
            }, {
                loader: 'postcss-loader', // Run post css actions
                options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                        return [
                            require('precss'),
                            require('autoprefixer')
                        ];
                    }
                }
            }, {
                loader: 'sass-loader' // compiles Sass to CSS
            }]
        },{
            test: /\.elm$/,
            exclude: [/elm-stuff/, /node_modules/],
            use: [{
                loader: 'elm-webpack-loader',
                options: {
                    verbose: true,
                    warn: true,
                    debug: true
                }
            }]
        }]
    }
};
