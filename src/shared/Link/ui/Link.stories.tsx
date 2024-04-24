import type { StoryObj } from '@storybook/react';
import { AppRoutes, appRoutesPaths } from 'shared/config/routes/routes';
import { firstLetterToUpperCase } from 'shared/lib/helpers/firstLetterToUpperCase';
import { ProviderDecorator } from 'shared/config/storybook/ProviderDecorator/ProviderDecorator';
import { ThemeDecorartor } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import Link, { LinkTheme } from './Link';

const meta = {
    title: 'shared/Link',
    component: Link,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [ProviderDecorator],
    args: {
        to: appRoutesPaths.main,
        children: firstLetterToUpperCase(AppRoutes.MAIN),
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LinkPrimaryLight: Story = {
    args: {
        theme: LinkTheme.INVERTED_PRIMARY,
    },
};

export const LinkSecondaryLight: Story = {
    args: { theme: LinkTheme.INVERTED_SECONDARY },
};

export const LinkPrimaryDark: Story = {
    args: {
        theme: LinkTheme.INVERTED_PRIMARY,
    },
};
LinkPrimaryDark.decorators = [ThemeDecorartor(Theme.DARK)];

export const LinkSecondaryDark: Story = {
    args: { theme: LinkTheme.INVERTED_SECONDARY },
};
LinkSecondaryDark.decorators = [ThemeDecorartor(Theme.DARK)];
