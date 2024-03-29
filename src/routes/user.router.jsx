import { Outlet } from "react-router-dom";
import AllUsers from "../pages/users/AllUsers";
import GuestUsers from "../pages/users/GuestUsers";
import BlockedUser from "../pages/users/BlockedUser";

const userRouter = {
    path: 'user/',
    element: <Outlet />,
    children: [
        {
            path: 'all-users',
            element: <AllUsers />
        },
        {
            path: 'guest-users',
            element: <GuestUsers />
        },
        {
            path: 'blocked-users',
            element: <BlockedUser />
        }
    ]
}

export default userRouter