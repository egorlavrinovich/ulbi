import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    SECONDARY = 'secondary',
    PRIMARY = 'primary',
    INVERTED_CLEAR = 'inverted-clear'
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton,
    disabled?: boolean
}

const Button: FC<ButtonProps> = ({
    className, children, disabled, theme, ...props
}) => (
    <div className={classes.btnWrapper}>
        <button
            type="button"
            className={classNames({
                cls: classes?.button,
                additional: [classes?.[theme], className],
            })}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    </div>
);

export default Button;
