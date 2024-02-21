import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { paths, mode } = options;
  return {
    entry: paths?.entry, // точка входа в приложение
    mode,
    output: {
      filename: "[name].[contenthash].js", // генерация уникального имени
      path: paths?.build, // создание папки build
      clean: true, // чистка ненужных файлов после каждого билда
    },
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(paths),
    devtool: "inline-source-map", // Определения в каких именно файлах возникли ошибки
    devServer: buildDevServer(options),
  };
};
