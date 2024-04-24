import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { appRoutesPathsProperties } from 'shared/config/routes/routes';
import Link, { LinkTheme } from 'shared/Link/ui/Link';
import { firstLetterToUpperCase } from 'shared/lib/helpers/firstLetterToUpperCase';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classes from './routesRender.module.scss';

interface RouteRenderProps {
    isSideBarOpen: boolean
}

const RoutesRender: FC<RouteRenderProps> = ({ isSideBarOpen }) => {
    const { pathname } = useLocation();
    const { t } = useTranslation();

    return (
        <div className={classNames({ cls: classes?.routesRender })}>
            {
                appRoutesPathsProperties?.map((item) => {
                    const { name, icon, path } = item;
                    const { INVERTED_PRIMARY, INVERTED_SECONDARY } = LinkTheme;
                    const theme = pathname === path ? INVERTED_PRIMARY : INVERTED_SECONDARY;
                    return (
                        <Link
                            key={name}
                            to={path}
                            theme={theme}
                        >
                            <div className={classNames({ cls: classes?.routesRenderBlock })}>
                                <div className={classNames({
                                    cls: classes?.routesRenderBlockIcon,
                                    additional: [theme],
                                })}
                                >
                                    {icon}
                                </div>
                                <span
                                    className={classNames({ mods: { [classes?.routesNameHide]: !isSideBarOpen } })}
                                >
                                    {t(`${firstLetterToUpperCase(name)}`)}
                                </span>
                            </div>

                        </Link>
                    );
                })
            }
        </div>
    );
};

export default RoutesRender;
