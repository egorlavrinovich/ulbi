import { useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme } from "./ThemeContext";

const DEFAULT_THEME =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const UseTheme = () => {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  const changeTheme = () => {
    const resultTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(resultTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, resultTheme);
  };
  return { theme, changeTheme };
};
