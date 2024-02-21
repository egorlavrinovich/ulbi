import {RuleSetRule} from "webpack";

export const buildLoaders = ():RuleSetRule[] => {

    const typeScriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [
        typeScriptLoader
    ]
}

//! Порядок лоудеров имеет значение
