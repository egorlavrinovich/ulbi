import React, { Suspense } from "react";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Route, Routes } from "react-router-dom";
import { appRoutesConfig } from "../config/appRoutesConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {appRoutesConfig?.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
