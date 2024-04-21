import type { StoryObj } from '@storybook/react';
import { ThemeDecorartor } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import MainPage from './MainPage';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const MainPageLight: Story = {
    args: {},
};

export const MainPageDark: Story = {
    args: {},
};
MainPageDark.decorators = [ThemeDecorartor(Theme.DARK)];
