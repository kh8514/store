
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import MasterLayout from "../pages/layout/MasterLayout";

const PrivateRoutes = () => {

    return (
        <Routes>
            <Route element={<MasterLayout/>}>
                 {/* Pages */}
                <Route path='dashboard' element={<Dashboard />} />



                {/* Page Not Found */}
                <Route path='*' element={<Navigate to='/error/404' />} />
            </Route>
        </Routes>
    )
}

export {PrivateRoutes}