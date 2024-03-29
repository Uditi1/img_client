import { Outlet } from "react-router-dom";
import ChangePassword from "../pages/adminSetting/ChangePassword";

const adminsettingRouter = {
    path: "admin-setting/",
    element: <Outlet />,
    children: [
        {
            path: "change-password",
            element: <ChangePassword />,
        }
    ]
}

export default adminsettingRouter;