import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { UseTheme } from "shared/lib/theme/UseTheme";
import AppRouter from "./providers/router/ui/AppRouter";

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
      <button onClick={changeTheme}>Toggle</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};

export default App;
