import type {Preview} from "@storybook/react";
import {StyleDecorartor} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorartor";
import {ThemeDecorartor} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../src/shared/config/theme/ThemeContext";
import {withI18nextDecorator} from "../../src/shared/config/storybook/i18nDecorator/i18nDecorator";


const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [StyleDecorartor, ThemeDecorartor(Theme.LIGHT), withI18nextDecorator]
};

export default preview;
