import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const { isDev } = options;

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // объект modules для поддержки module.scss, которые нужны для генерации уникальных имён для стилей
                        auto: (filePath: string) => /.module./.test(filePath), // модульный подход используется только для scss файлов с .module. в названии
                        localIdentName: isDev // в дев режиме используем в качестве названия файла scss путь к нему и само название
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:5]', // в прод режиме, просто генерируем hash в base64
                    },
                },
            },
            'sass-loader',
        ], // MiniCssExtractPlugin.loader служит для разделения стилей в коде
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    return [fileLoader, babelLoader, svgLoader, typeScriptLoader, styleLoader];
};

//! Порядок лоудеров имеет значение
