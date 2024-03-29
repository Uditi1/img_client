import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import OtpVerify from "../pages/auth/OtpVerify";
import CreatePassword from "../pages/auth/CreatePassword";
import RootLayout from "../layouts/RootLayout";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import userRouter from "./user.router";
import categoryRouter from "./category.router";
import festivalRouter from "./festival.router";
import adminsettingRouter from "./adminsetting.router";
import appsettingRouter from "./appsetting.router";
import '../utils/styles/Pagination.css'

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <RootLayout />,
    children: [
        {
            path: '*',
            element: <MainLayout />,
            children: [
              {
                path: '*',
                element: <Dashboard />
              },
              {
               ...userRouter
              },
              {
                ...categoryRouter
              },
              {
                ...festivalRouter
              },
              {
                ...appsettingRouter
              },
              {
                ...adminsettingRouter
              }
            ]
        }
    ]
  },
  
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/otp-verify",
        element: <OtpVerify />,
      },
      {
        path: "/create-password",
        element: <CreatePassword />,
      },
    ],
  },
]);

export default router;
