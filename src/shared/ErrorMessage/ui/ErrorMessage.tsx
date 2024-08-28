import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './ErrorMessage.module.scss';

export enum ERROR_MESSAGE_TYPES {
    FATAL = 'fatal',
    INFO = 'info',
    WARNING = 'warning',
}

interface ErrorMessageProps {
    messageType: ERROR_MESSAGE_TYPES,
}

const ErrorMessage: FC<ErrorMessageProps> = ({ children, messageType }) => (
    <div className={classNames({ cls: classes?.errorMessage, additional: [classes?.[messageType]] })}>{children}</div>
);

export default ErrorMessage;
