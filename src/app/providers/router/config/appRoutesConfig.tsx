import { appRoutesPaths } from "shared/config/routes/routes";
import MainPage from "pages/MainPage/ui/MainPage";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import { PathRouteProps } from "react-router-dom";

export const appRoutesConfig: PathRouteProps[] = [
  {
    path: appRoutesPaths.main,
    element: <MainPage />,
  },
  {
    path: appRoutesPaths.about,
    element: <AboutPage />,
  },
];
