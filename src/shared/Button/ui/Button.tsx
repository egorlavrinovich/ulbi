import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton
}

const Button: FC<buttonProps> = ({
    className, children, theme, ...props
}) => (
    <button
        type="button"
        className={classNames({
            cls: classes?.button,
            additional: [classes?.[theme], className],
        })}
        {...props}
    >
        {children}
    </button>
);

export default Button;
