import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './BurgerMenu.scss';

interface BurgerMenuProps {
    isOpen: boolean,
    cb?: () => void
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, cb, ...rest }) => (
    <div
        role="presentation"
        data-testid="menu-burger"
        onClick={cb}
        className={classNames({
            cls: 'burger',
            mods: {
                active: isOpen,
            },
        })}
        {...rest}
    />
);

export { BurgerMenu };
