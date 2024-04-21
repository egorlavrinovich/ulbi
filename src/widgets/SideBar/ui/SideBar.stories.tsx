import type { StoryObj } from '@storybook/react';
import { ThemeDecorartor } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { LOCAL_STORAGE_THEME_KEY, Theme } from 'shared/config/theme/ThemeContext';
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
export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const SideBarLight: Story = {
    args: {},
};

export const SideBarDark: Story = {
    args: {},
};
SideBarDark.decorators = [ThemeDecorartor(Theme.DARK)];
