import React from 'react';
import Home from '../../assets/home.svg';
import About from '../../assets/about.svg';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const appRoutesPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

type AppRouteObject = {
    name: AppRoutes;
    path: string;
    icon: React.ReactElement;
};

export const appRoutesPathsProperties: AppRouteObject[] = [
    {
        name: AppRoutes.MAIN,
        path: appRoutesPaths.main,
        icon: <Home />,
    },
    {
        name: AppRoutes.ABOUT,
        path: appRoutesPaths.about,
        icon: <About />,
    },
];
