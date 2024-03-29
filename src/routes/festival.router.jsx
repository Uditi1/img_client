import { Outlet } from "react-router-dom";
import AllFestival from "../pages/festival/AllFestival";
import AddNewFestival from "../pages/festival/AddNewFestival";

const festivalRouter = {
    path: "festival/",
    element: <Outlet />,
    children: [
      {
        path: "all-festival",
        element: <AllFestival />,
      },
      {
        path: "add-new-festival",
        element: <AddNewFestival />,
      },
     
    ],
  };

  export default festivalRouter