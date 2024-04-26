import { FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    PRIMARY = 'primary'
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton
}

const Button: FC<ButtonProps> = ({
    className, children, theme, ...props
}) => (
    <div className={classes.btnWrapper}>
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
    </div>
);

export default Button;
