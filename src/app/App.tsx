import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { UseTheme } from 'shared/lib/theme/UseTheme';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import Loader from 'shared/Loading/ui/Loading';
import { PageError } from 'shared/PageError/ui/PageError';
import { ErrorBoundary } from 'react-error-boundary';
import AppRouter from './providers/router/ui/AppRouter';

const App = () => {
    const { theme } = UseTheme();
    return (
        <Suspense fallback={<Loader />}>
            <ErrorBoundary FallbackComponent={PageError}>
                <div
                    className={classNames({
                        cls: 'app',
                        additional: [theme],
                    })}
                >
                    <NavBar />
                    <div className="main-content">
                        <SideBar />
                        <AppRouter />
                    </div>
                </div>
            </ErrorBoundary>
        </Suspense>
    );
};

export default App;
