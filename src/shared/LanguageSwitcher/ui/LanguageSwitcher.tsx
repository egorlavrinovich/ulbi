import Button, { ThemeButton } from 'shared/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import classes from './languageSwitcher.module.scss';
import LangSwitcher from '../../assets/language-switcher.svg';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const changeLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    return (
        <Button onClick={changeLanguage} theme={ThemeButton.CLEAR} className={classes.languageSwitcher}>
            <LangSwitcher />
        </Button>
    );
};

export default LanguageSwitcher;
