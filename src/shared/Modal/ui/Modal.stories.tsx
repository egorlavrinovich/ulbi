import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorartor } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/config/theme/ThemeContext';
import { ThemeButton } from 'shared/Button/ui/Button';
import Modal from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        children: 'Некоторый текст',
        openBtn: {
            btnName: 'Нажми на меня',
            theme: ThemeButton.PRIMARY,
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LightModal: Story = {
    args: { isPortal: false },
};

export const DarkModal: Story = {
    args: { isPortal: false, openBtn: { theme: ThemeButton.SECONDARY, btnName: 'Нажми на меня' } },
};
DarkModal.decorators = [ThemeDecorartor(Theme.DARK)];
