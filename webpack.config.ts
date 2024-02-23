import path from "path";
import "webpack-dev-server";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: "./src/index.tsx",
    build: path.resolve(__dirname, "build"),
    html: "public/index.html",
  };

  const mode = env?.mode || "development";
  const PORT = env?.port || 3000;

  return buildWebpackConfig({
    mode,
    paths,
    port: PORT,
  });
};
