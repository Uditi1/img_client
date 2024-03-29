import { Outlet } from "react-router-dom";
import AppPopup from "../pages/appSetting/AppPopup";
import AddPopup from "../pages/appSetting/AddPopup";

const appsettingRouter = {
    path: "app-setting/",
    element: <Outlet />,
    children: [
        {
            path: "app-popup",
            element: <AppPopup />,
        },
        {
            path: "add-popup",
            element: <AddPopup />,
        }
    ]
}

export default appsettingRouter;