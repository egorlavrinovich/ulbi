const HtmlWebpackPlugin = require('html-webpack-plugin');
import path from 'path';
import webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: webpack.Configuration  = {
    entry: './src/index.ts',
    mode:'development',
    output: {
        filename: '[name].[contenthash].js', // генерация уникального имени
        path: path.resolve(__dirname, 'build'), // создание папки build
        clean:true // чистка ненужных файлов после каждого билда
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "public/index.html" // создание в папке build файла из папки public
    }), new webpack.ProgressPlugin()],
};

export default config;