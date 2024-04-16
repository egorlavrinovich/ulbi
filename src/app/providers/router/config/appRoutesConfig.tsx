import { appRoutesPaths } from 'shared/config/routes/routes';
import { PathRouteProps } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage/ui/NotFoundPage';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

export const appRoutesConfig: PathRouteProps[] = [
    {
        path: appRoutesPaths.main,
        element: <MainPage />,
    },
    {
        path: appRoutesPaths.about,
        element: <AboutPage />,
    },
    {
        path: appRoutesPaths.not_found,
        element: <NotFoundPage />,
    },
];
