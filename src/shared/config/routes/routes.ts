export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const appRoutesPaths:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};
