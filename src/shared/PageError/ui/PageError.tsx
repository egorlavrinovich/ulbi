import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/Button/ui/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
    error?: Error,
    resetErrorBoundary?: () => void
}

function PageError({ error, resetErrorBoundary }: PageErrorProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames({ cls: styles?.pageError })}>
            <p className={classNames({ cls: styles?.errorTitle })}>{t('Что-то пошло не так')}</p>
            <p className={classNames({ cls: styles?.errorText })}>{`${t('Код ошибки')}: ${error?.message}`}</p>
            <Button onClick={resetErrorBoundary}>{t('Перезагрузить')}</Button>
        </div>
    );
}

export { PageError };
