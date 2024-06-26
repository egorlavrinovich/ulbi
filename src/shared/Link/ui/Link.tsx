import { FC } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Link.module.scss';

export enum LinkTheme {
    INVERTED_PRIMARY = 'inverted-primary',
    INVERTED_SECONDARY = 'inverted-secondary',
}

type typeOfLink = typeof LinkTheme[keyof typeof LinkTheme];

interface RouterLinkProps extends LinkProps {
    theme?: typeOfLink;
}

const Link: FC<RouterLinkProps> = ({
    to, children, theme,
}) => (
    <RouterLink
        className={classNames({ cls: classes.link, additional: [theme] })}
        to={to}
    >
        {children}
    </RouterLink>
);

export default Link;
