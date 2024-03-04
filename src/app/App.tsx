import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {UseTheme} from "shared/lib/theme/UseTheme";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

const App = () => {
    const {theme, changeTheme} = UseTheme();

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
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/about"} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
