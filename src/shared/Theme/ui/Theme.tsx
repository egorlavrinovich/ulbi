import {FC, ReactNode} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import classes from "./theme.module.scss";
import Button, {ThemeButton} from "shared/Button/ui/Button";
import {UseTheme} from "shared/lib/theme/UseTheme";
import Light from '../../assets/light-mode.svg'
import Dark from '../../assets/dark-mode.svg'
import {Theme} from "shared/config/theme/ThemeContext";

interface ThemeProps {
    className?: string
}

const THEME_MOD_MAP: Record<Theme, ReactNode> = {
    [Theme.LIGHT]: <Dark/>,
    [Theme.DARK]: <Light/>
}

const ThemeSwitcher: FC<ThemeProps> = ({className}) => {
    const {theme, changeTheme} = UseTheme();
    return (
        <Button theme={ThemeButton.CLEAR} className={classNames({cls: classes.theme, additional: [className]})}
                onClick={changeTheme}>{THEME_MOD_MAP[theme]}</Button>
    );
};

export default ThemeSwitcher;
