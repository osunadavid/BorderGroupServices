const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['env'] }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            },
            {
                test:  /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [ 'file-loader?name=images/[name].[ext]' ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [
            'node_modules',
            path.resolve('./dist'),
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "/"),
        port: 3000,
        hotOnly: true,
        open: true,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ]
};