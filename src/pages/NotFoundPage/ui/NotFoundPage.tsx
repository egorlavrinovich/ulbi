import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    const { t } = useTranslation();
    return (

        <div className={classNames({ cls: classes?.notFoundPage })}>{t('Страница не найдена')}</div>
    );
};

export default NotFoundPage;
