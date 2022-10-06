const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const root = path.join(__dirname, 'src');
const distPath = path.resolve(__dirname, 'public');

module.exports = {
    entry: {
        local: path.join(root, 'app.ts'),
    },
    output: {
        path: distPath,
        filename: 'app.min.js'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.ts'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './index.css',
        })
    ],
    devServer: {
        static: {
            directory: distPath
        },
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.app.json'
                }
            },
            {
                test: /\.svg$/i,
                type: 'asset/source'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }
        ]
    }
};
