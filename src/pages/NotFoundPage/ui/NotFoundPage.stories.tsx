import type { StoryObj } from '@storybook/react';
import { ThemeDecorartor } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import NotFoundPage from './NotFoundPage';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NotFoundPageLight: Story = {
    args: {},
};

export const NotFoundPageDark: Story = {
    args: {},
};
NotFoundPageDark.decorators = [ThemeDecorartor(Theme.DARK)];
