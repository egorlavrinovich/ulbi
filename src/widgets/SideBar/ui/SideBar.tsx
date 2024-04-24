import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeSwitcher from 'shared/ThemeSwitcher/ui/Theme';
import LanguageSwitcher from 'shared/LanguageSwitcher/ui/LanguageSwitcher';
import { BurgerMenu } from 'shared/BurgerMenu/ui/BurgerMenu';
import { RoutesRender } from 'entites/RoutesRender';
import classes from './SideBar.module.scss';

const SideBar: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleNavBar = () => setIsOpen(!isOpen);

    return (
        <div
            data-testid="sidebar"
            className={classNames({
                cls: classes?.sideBar,
                mods: { [classes.active]: isOpen, [classes.close]: !isOpen },
            })}
        >
            <BurgerMenu
                isOpen={isOpen}
                cb={toggleNavBar}
            />
            <div
                className={classNames({ cls: classes.mainContent })}
            >
                <RoutesRender isSideBarOpen={isOpen} />
            </div>
            <div className={classNames({ cls: classes.switchers })}>
                <ThemeSwitcher />
                {isOpen && <LanguageSwitcher />}
            </div>
        </div>
    );
};

export default SideBar;
