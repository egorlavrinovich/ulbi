import type { StoryObj } from '@storybook/react';
import { ThemeDecorartor } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { BurgerMenu } from './BurgerMenu';

const meta = {
    title: 'shared/BurgerMenu',
    component: BurgerMenu,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BurgerMenuLight: Story = {
    args: { isOpen: false },
};

export const BurgerMenuDark: Story = {
    args: { isOpen: false },
};
BurgerMenuDark.decorators = [ThemeDecorartor(Theme.DARK)];

export const BurgerMenuOpen: Story = {
    args: { isOpen: true },
};

export const BurgerMenuClose: Story = {
    args: { isOpen: false },
};
