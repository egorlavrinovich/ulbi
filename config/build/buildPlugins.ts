import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildPaths } from "./types/config";

export const buildPlugins = (
  path: BuildPaths
): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: path?.html, // создание в папке build файла из папки public
    }),
    new webpack.ProgressPlugin(),
  ];
};
