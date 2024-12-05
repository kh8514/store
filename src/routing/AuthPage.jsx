
import { Outlet, Route, Routes } from "react-router-dom"
import Login from "../modules/auth/Login";

const AuthPage = () => (
    <Routes>
        <Route element={<Outlet />}>
            <Route path="login" element={<Login />} />
            <Route index element={<Login />} />
        </Route>
    </Routes>
)

export { AuthPage }
