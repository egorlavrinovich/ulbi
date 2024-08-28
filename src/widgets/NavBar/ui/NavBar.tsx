import { classNames } from 'shared/lib/classNames/classNames';
import './Navbar.scss';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/Modal/ui/Modal';
import { ThemeButton } from 'shared/Button/ui/Button';
import React from 'react';
import { LoginModal } from 'features/AuthByUserName';
import styles from './NavBar.module.scss';

const NavBar = () => {
    const { pathname } = useLocation();
    const { t } = useTranslation();

    return (
        <div className={classNames({ cls: styles.navbar_links })}>
            <LoginModal />
        </div>
    );
};

export default NavBar;
