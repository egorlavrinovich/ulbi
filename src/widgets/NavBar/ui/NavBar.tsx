import Link, { LinkTheme } from 'shared/Link/ui/Link';
import { classNames } from 'shared/lib/classNames/classNames';
import './Navbar.scss';
import { AppRoutes, appRoutesPaths } from 'shared/config/routes/routes';
import { firstLetterToUpperCase } from 'shared/lib/helpers/firstLetterToUpperCase';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './NavBar.module.scss';

const NavBar = () => {
    const { pathname } = useLocation();
    const { t } = useTranslation();

    return (
        <div className={classNames({ cls: styles.navbar_links })}>
            {Object.entries(appRoutesPaths)?.map(([key, value]) => {
                const { PRIMARY, SECONDARY } = LinkTheme;
                return (
                    <Link
                        key={key}
                        to={value}
                        theme={pathname === value ? PRIMARY : SECONDARY}
                        display={key === AppRoutes.NOT_FOUND} // TODO remove it, when permissions will done
                    >
                        {t(`${firstLetterToUpperCase(key)}`)}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavBar;
