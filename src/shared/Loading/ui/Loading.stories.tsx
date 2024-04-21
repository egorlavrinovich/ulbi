import type { StoryObj } from '@storybook/react';
import { ThemeDecorartor } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import Loading from './Loading';

const meta = {
    title: 'shared/Loading',
    component: Loading,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingLight: Story = {
    args: {},
};

export const LoadingDark: Story = {
    args: {},
};
LoadingDark.decorators = [ThemeDecorartor(Theme.DARK)];
