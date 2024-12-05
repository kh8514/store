import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import App from "../App";
import {PrivateRoutes} from "./PrivateRoutes";
import {AuthPage} from "./AuthPage";
import {ErrorsPage} from "../pages/errors/ErrorsPage";
import {FindRoutes} from "./FindRoutes";
import Main from "../modules/main/Main";

const AppRoutes = () => {
    const isAuth = false
    return (
        <BrowserRouter future={{ v7_relativeSplatPath: true }}>
            <Routes>
                <Route element={<App />} >
                    <Route path="/error/*" element={<ErrorsPage />} />
                    <Route path="/find/*" element={<FindRoutes />} />
                    <Route path="/main" element={<Main />} />
                    {isAuth ? (
                        <>
                            <Route path='/*' element={<PrivateRoutes />} />
                            <Route index element={<Navigate to='/dashboard' />} />
                        </>
                    ) : (
                        <>
                            <Route path="auth/*" element={<AuthPage />} />
                            <Route path="*" element={<Navigate to="/auth" replace/>} />
                        </>
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;