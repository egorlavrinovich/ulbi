import React, { Suspense } from "react";
import classes from "./app.module.scss";
import { Link, Route, Routes } from "react-router-dom";
import AboutPageLazy from "./pages/AboutPage/AboutPagesLazy";
import MainPageLazy from "./pages/MainPage/MainPageLazy";

const App = () => {
  return (
    <div>
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
