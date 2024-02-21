import webpack from "webpack";
import { BuildOptions } from "./types/config";

export const buildDevServer = (
  options: BuildOptions
): webpack.Configuration["devServer"] => {
  const { port } = options;
  return {
    port,
    open: true,
    static: "./build",
  };
};
