import type { StoryObj } from '@storybook/react';
import { ThemeDecorartor } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { ProviderDecorator } from 'shared/config/storybook/ProviderDecorator/ProviderDecorator';
import SideBar from './SideBar';

const meta = {
    title: 'widjet/Sidebar',
    component: SideBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SideBarLight: Story = {
    args: {},
};
SideBarLight.decorators = [ProviderDecorator];

export const SideBarDark: Story = {
    args: {},
};
SideBarDark.decorators = [ProviderDecorator, ThemeDecorartor(Theme.DARK)];
