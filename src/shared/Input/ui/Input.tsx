import {
    FC, forwardRef, InputHTMLAttributes, LabelHTMLAttributes, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Input.module.scss';

type label = LabelHTMLAttributes<HTMLLabelElement>

const DEFAULT_ERROR_MESSAGE = 'Введите значение';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    titleLabel?: label,
    isError?: boolean,
    errorMessage?: string,
    setValue?: (e: string) => void
    onBlure?: (isBlur: boolean) => void
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({
    type = 'text',
    name,
    titleLabel,
    required,
    pattern,
    isError = false,
    errorMessage = DEFAULT_ERROR_MESSAGE,
    value,
    setValue,
    onBlure,
    ...props
}, ref) => (
    <>
        {titleLabel && <label htmlFor={name} {...titleLabel}>{titleLabel.title}</label>}
        <input
            value={value}
            ref={ref}
            type={type}
            name={name}
            className={classNames({ cls: classes?.input })}
            required={required}
            pattern={pattern}
            onChange={(e) => setValue(e?.target?.value)}
            onBlur={() => onBlure(true)}
            {...props}
        />
        {isError && <label htmlFor={name}>{errorMessage}</label>}
    </>
));
export { Input };
