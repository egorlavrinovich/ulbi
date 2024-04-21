import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorartor } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import Button, { ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
    args: {
        children: 'Text',
    },
};
Primary.decorators = [ThemeDecorartor(Theme.DARK)];

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const OutLine: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
