import type {StorybookConfig} from "@storybook/react-webpack5";
import webpack from "webpack";

const path = require('path');

const config: StorybookConfig = {
    stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },

    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic'
                }
            }
        }
    }),

    webpackFinal: async (config) => {

        const fileLoaderRule = config.module.rules.find(
            (rule: any) => rule.test && rule.test.test(".svg")
        );
        //@ts-ignore
        fileLoaderRule.exclude = /\.svg$/;

        config.resolve.modules = [
            ...(config.resolve.modules || []),
            path.resolve(__dirname, "../../src"),
        ];

        config.plugins.push(new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
        }),)


        config.module.rules.push({
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../../'),
            },
            {
                test: /\.svg$/,
                enforce: "pre",
                loader: require.resolve("@svgr/webpack")
            }
        );


        return config;
    },
};
export default config;
