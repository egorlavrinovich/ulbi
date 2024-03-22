import { useContext } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from '../../config/theme/ThemeContext';

export const UseTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        const resultTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(resultTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, resultTheme);
    };
    return { theme, changeTheme };
};
