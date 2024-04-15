import { FC } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { IsVisible } from 'shared/lib/helpers/IsVisible';
import classes from './Link.module.scss';

export enum LinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type typeOfLink = typeof LinkTheme[keyof typeof LinkTheme];

interface RouterLinkProps extends LinkProps {
    theme?: typeOfLink;
    display?: boolean
}

const Link: FC<RouterLinkProps> = ({
    to, children, theme, display,
}) => (
    <IsVisible condition={display}>
        <RouterLink
            className={classNames({ cls: classes.link, additional: [theme] })}
            to={to}
        >
            {children}
        </RouterLink>
    </IsVisible>
);

export default Link;
