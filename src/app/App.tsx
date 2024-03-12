import { classNames } from "shared/lib/classNames/classNames";
import { UseTheme } from "shared/lib/theme/UseTheme";
import AppRouter from "./providers/router/ui/AppRouter";
import { NavBar } from "./widgets/NavBar";

const App = () => {
  const { theme, changeTheme } = UseTheme();

  return (
    <div
      className={classNames({
        cls: "app",
        mods: {},
        additional: [theme],
      })}
    >
      <NavBar />
      <button onClick={changeTheme}>Toggle</button>
      <AppRouter />
    </div>
  );
};

export default App;
