import path from "path";
import webpack from "webpack";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: "./src/index.ts",
    build: path.resolve(__dirname, "build"),
    html: "public/index.html",
  };

  const mode = env?.mode || "development";
  const PORT = env?.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    port: PORT,
  });

  return config;
};
