import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {appRoutesConfig} from "../config/appRoutesConfig";
import {useTranslation} from "react-i18next";

const AppRouter = () => {
    const {t} = useTranslation();

    return (
        <Suspense fallback={<div>{t('loading')}</div>}>
            <Routes>
                {appRoutesConfig?.map(({path, element}) => (
                    <Route key={path} path={path} element={<div className='page-wrapper'>{element}</div>}/>
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
