import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildPaths} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export const buildPlugins = (
    path: BuildPaths, isDev: boolean
): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: path?.html, // создание в папке build файла из папки public
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            // служит для отделения стилей от основного кода в бандле ( в данном случае создана папка css в build )
            filename: "css/[contenthash].css",
            chunkFilename: "css/[contenthash].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(), // обновление изменений без refresh страницы
        new ReactRefreshWebpackPlugin() // обновление изменений без refresh страницы
    ];
};
