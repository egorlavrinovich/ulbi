import React, {
    FC, FormHTMLAttributes, ReactElement, ReactNode, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ErrorMessage, { ERROR_MESSAGE_TYPES } from 'shared/ErrorMessage/ui/ErrorMessage';
import classes from './FormItem.module.scss';

type IMessageType = typeof ERROR_MESSAGE_TYPES[keyof typeof ERROR_MESSAGE_TYPES]

type IRules = {
    message?: string
    pattern?: string
    minLength?: number
    maxLength?: number
    required?: boolean
    min?: number
    max?: number
}

export interface FormItemProps extends FormHTMLAttributes<HTMLDivElement> {
    children: ReactElement | ReactNode
    error?: boolean,
    validateField?: (name: string) => void
    isValidatedForm?: boolean,
    messageType?: IMessageType,
    rules?: Array<IRules>
}

const DEFAULT_ERROR_MESSAGES = {
    valueMissing: 'Заполните поле',
    tooLong: 'Значение превышает лимит',
    tooShort: 'Значение меньше заданного лимита',
};

export const ERROR_TYPES_MAP = {
    customError: (msg: string) => msg,
    patternMismatch: (msg: string) => msg,
    tooLong: (msg: string) => msg || DEFAULT_ERROR_MESSAGES?.tooLong,
    tooShort: (msg: string) => msg || DEFAULT_ERROR_MESSAGES?.tooShort,
    valueMissing: (msg: string) => msg || DEFAULT_ERROR_MESSAGES?.valueMissing,
};

const RULES_AND_ERRORS_MAP = {
    customError: 'pattern',
    patternMismatch: 'pattern',
    tooLong: 'maxLength',
    tooShort: 'minLength',
    valueMissing: 'required',
};

const FormItem: FC<FormItemProps> = ({
    children,
    error,
    validateField,
    isValidatedForm,
    name,
    messageType,
    rules = [],
}) => {
    const [internalErr, setInternalErr] = useState(false);
    const [value, setValue] = useState(null);
    const [handleBlur, setHandleBlur] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const childrenRef = useRef(null);

    useEffect(() => {
        setInternalErr(error);
    }, [error]);

    const onHandleBlure = (condition: boolean) => {
        if (value) return setHandleBlur(condition);
        return setHandleBlur(false);
    };
    // @ts-ignore
    const findRuleMessage = (key?: string) => rules?.find((item) => item?.[RULES_AND_ERRORS_MAP?.[key]])?.message;

    // @ts-ignore
    const generateErrorMessage = () => Object.keys(ERROR_TYPES_MAP)?.map((key) => (childrenRef?.current?.validity?.[key] && setErrorMessage(ERROR_TYPES_MAP[key](findRuleMessage(key)))));

    const generateRules = () => rules?.reduce((acc: {}, item: IRules) => {
        const { message, ...rest } = item;
        return { ...acc, ...rest };
    }, {});

    useEffect(() => {
        if (isValidatedForm || handleBlur) {
            validateField(name);
            generateErrorMessage();
        }
    }, [value, handleBlur, isValidatedForm]);

    return (
        <div className={classNames({ cls: classes?.formItem })}>
            <div
                className={classNames({
                    cls: classes?.children,
                    mods: { [classes[ERROR_MESSAGE_TYPES.FATAL]]: error },
                })}
            >
                {React.cloneElement(children as ReactElement, {
                    ref: (ref: any) => {
                        childrenRef.current = ref;
                    },
                    value,
                    setValue,
                    onBlure: onHandleBlure,
                    ...generateRules(),
                })}
            </div>
            {internalErr && (
                <ErrorMessage
                    messageType={messageType || ERROR_MESSAGE_TYPES.FATAL}
                >
                    {errorMessage}
                </ErrorMessage>
            )}
        </div>
    );
};

export default FormItem;
