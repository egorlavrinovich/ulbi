import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeSwitcher from 'shared/ThemeSwitcher/ui/Theme';
import LanguageSwitcher from 'shared/LanguageSwitcher/ui/LanguageSwitcher';
import classes from './sideBar.module.scss';

interface SideBarProps {

}

const SideBar: FC<SideBarProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleNavBar = (e: React.MouseEvent<HTMLDivElement>) => {
        const { type } = e;
        type === 'mouseenter' ? setIsOpen(true) : setIsOpen(false);
    };

    return (
        <div
            data-testid="sidebar"
            onMouseEnter={toggleNavBar}
            onMouseLeave={toggleNavBar}
            className={classNames({
                cls: classes?.sideBar,
                mods: { [classes.active]: isOpen, [classes.close]: !isOpen },
            })}
        >
            <div className={classNames({ cls: classes.mainContent })}>{children}</div>
            <div className={classNames({ cls: classes.switchers })}>
                <ThemeSwitcher />
                {isOpen && <LanguageSwitcher />}
            </div>
        </div>
    );
};

export default SideBar;
