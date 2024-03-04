import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (
    options: BuildOptions
): webpack.Configuration => {
    const {paths, mode, isDev} = options;
    return {
        entry: paths?.entry, // точка входа в приложение
        mode,
        output: {
            filename: "[name].[contenthash].js", // генерация уникального имени
            path: paths?.build, // создание папки build
            clean: true, // чистка ненужных файлов после каждого билда
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(paths),
        devtool: isDev ? "inline-source-map" : undefined, // Определения в каких именно файлах возникли ошибки
        devServer: buildDevServer(options),
    };
};
