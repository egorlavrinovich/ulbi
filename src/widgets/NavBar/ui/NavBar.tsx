import { classNames } from 'shared/lib/classNames/classNames';
import './Navbar.scss';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/Button/ui/Button';
import React, { useContext } from 'react';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch } from 'react-redux';
import { userActions } from 'entites/User';
import { AuthContext } from 'app/providers/AuthProvider/AuthProvider';
import styles from './NavBar.module.scss';

const NavBar = () => {
    const { pathname } = useLocation();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { isAuth } = useContext(AuthContext);

    const logOut = () => dispatch(userActions.logOut());

    return (
        <div className={classNames({ cls: styles.navbar_links })}>
            {!isAuth ? <LoginModal />
                : <Button theme={ThemeButton.INVERTED_CLEAR} onClick={logOut}>{t('Выйти')}</Button>}
        </div>
    );
};

export default NavBar;
