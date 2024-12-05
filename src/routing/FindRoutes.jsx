
import { Outlet, Route, Routes } from "react-router-dom"
import UserPwdHelp from "../pages/find/UserPwdHelp";
import UserIdHelp from "../pages/find/UserIdHelp";

const FindRoutes = () => (
    <Routes>
        <Route element={<Outlet />}>
            <Route path="id" element={<UserIdHelp/>} />
            <Route path="pwd" element={<UserPwdHelp/>} />
        </Route>
    </Routes>
)

export { FindRoutes }
