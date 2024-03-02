import { FC } from "react";
import { ThemeContext } from "./ThemeContext";
import { UseTheme } from "./UseTheme";

const ThemeProvider: FC = ({ children }) => {
  const { theme, changeTheme } = UseTheme();
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
