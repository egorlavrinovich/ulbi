import React, { Suspense, useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AboutPageLazy from "./pages/AboutPage/AboutPagesLazy";
import MainPageLazy from "./pages/MainPage/MainPageLazy";
import { ThemeContext } from "./theme/ThemeContext";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div
      className={classNames({
        cls: "app",
        mods: {},
        additional: [theme],
      })}
    >
      <button onClick={changeTheme}>Toggle</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Link to={"/"}>Main</Link>
        <Link to={"/about"}>About</Link>
        <Routes>
          <Route path={"/"} element={<MainPageLazy />} />
          <Route path={"/about"} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
