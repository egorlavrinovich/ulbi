import {FC} from "react";
import classes from "./languageSwitcher.module.scss";
import Button, {ThemeButton} from "shared/Button/ui/Button";
import LangSwitcher from '../../assets/language-switcher.svg'
import {useTranslation} from "react-i18next";


const LanguageSwitcher: FC = () => {
    const {i18n} = useTranslation();
    const changeLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    return (
        <Button onClick={changeLanguage} theme={ThemeButton.CLEAR} className={classes.languageSwitcher}><LangSwitcher/></Button>
    );
};

export default LanguageSwitcher;
