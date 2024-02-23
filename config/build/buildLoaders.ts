import { RuleSetRule } from "webpack";

export const buildLoaders = (): RuleSetRule[] => {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader", // Порядок лоудеров для css имеет значение
      "css-loader",
      "sass-loader",
    ],
  };

  return [typeScriptLoader, styleLoader];
};

//! Порядок лоудеров имеет значение
