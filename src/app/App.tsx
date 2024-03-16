import {classNames} from "shared/lib/classNames/classNames";
import {UseTheme} from "shared/lib/theme/UseTheme";
import AppRouter from "./providers/router/ui/AppRouter";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";

const App = () => {
    const {theme} = UseTheme();

    return (
        <div
            className={classNames({
                cls: "app",
                additional: [theme],
            })}
        >
            <NavBar/>
            <div className='main-content'>
                <SideBar/>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;
