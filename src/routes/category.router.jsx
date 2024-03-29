import { Outlet } from "react-router-dom";
import AllCategory from "../pages/category/AllCategory";
import AddNewCategory from "../pages/category/AddNewCategory";
import DailyGreeting from "../pages/category/DailyGreeting";
import AddNewImage from "../pages/category/AddNewImage";
import AddNewTag from "../pages/category/AddNewTag";

const categoryRouter = {
  path: "category/",
  element: <Outlet />,
  children: [
    {
      path: "all-category",
      element: <AllCategory />,
    },
    {
      path: "add-new-category",
      element: <AddNewCategory />,
    },
    {
      path: "daily-greetings/:id",
      element: <DailyGreeting />,
    },
    {
      path: "add-new-image/:id",
      element: <AddNewImage />,
    },
    {
      path: "add-new-tag",
      element: <AddNewTag />,
    },
  ],
};

export default categoryRouter;
