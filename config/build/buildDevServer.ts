import webpack from "webpack";
import {BuildOptions} from "./types/config";

export const buildDevServer = (
    options: BuildOptions
): webpack.Configuration["devServer"] => {
    const {port} = options;
    return {
        port,
        historyApiFallback: true,
        hot: true
    };
};
