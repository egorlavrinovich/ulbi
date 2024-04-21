import type { StoryObj } from '@storybook/react';
import { ThemeDecorartor } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { ProviderDecorator } from 'shared/config/storybook/ProviderDecorator/ProviderDecorator';
import NavBar from './NavBar';

const meta = {
    title: 'widjet/Navbar',
    component: NavBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NavBarLight: Story = {
    args: {},
};
NavBarLight.decorators = [ProviderDecorator];

export const NavBarDark: Story = {
    args: {},
};
NavBarDark.decorators = [ProviderDecorator, ThemeDecorartor(Theme.DARK)];
