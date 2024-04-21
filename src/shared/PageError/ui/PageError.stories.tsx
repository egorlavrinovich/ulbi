import type { StoryObj } from '@storybook/react';
import { ThemeDecorartor } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { PageError } from './PageError';

const meta = {
    title: 'shared/PageError',
    component: PageError,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PageErrorLight: Story = {
    args: {},
};

export const PageErrorDark: Story = {
    args: {},
};
PageErrorDark.decorators = [ThemeDecorartor(Theme.DARK)];
