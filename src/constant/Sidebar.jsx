import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LargeLogo from "../ui/logos/LargeLogo";
import CategorySidebarDrop from "../components/sidebarElements/CategorySidebarDrop";
import UserSidebarDrop from "../components/sidebarElements/UserSidebarDrop";
import FestivalSidebarDrop from "../components/sidebarElements/FestivalSidebarDrop";
import AdminSettingsSidebarDrop from "../components/sidebarElements/AdminSettingsSidebarDrop";
import AppSettingsSidebarDrop from "../components/sidebarElements/AppSettingsSidebarDrop";
import LogoutContainer from "../components/logout/LogoutContainer";

const Sidebar = () => {
  const [open, setOpen] = useState(window.innerWidth > 1020);
  const [activeLink, setActiveLink] = useState("/dashboard");
  const [activeDropLink, setActiveDropLink] = useState("");
  const [dropdowns, setDropdowns] = useState({
    dashboard: false,
    users: false,
    category: false,
    festival: false,
    appSettings: false,
    adminSettings: false,
    // Add more dropdowns as needed
  });
  const [currentlyOpen, setCurrentlyOpen] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setActiveDropLink(link);
    setOpen(window.innerWidth > 1020);
  };

  const handleDropLinkClick = (link) => {
    setActiveDropLink(link);
    setOpen(window.innerWidth > 1020);
  };

  const toggleDropdown = (dropdown) => {
    if (currentlyOpen !== null) {
      setDropdowns((prevDropdowns) => ({
        ...prevDropdowns,
        [currentlyOpen]: false,
      }));
    }

    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [dropdown]: !prevDropdowns[dropdown],
    }));

    setCurrentlyOpen(dropdown);
  };

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth > 1020); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen overflow-auto">
      <div
        className={`${
          open ? "2xl:w-[270px] xl:w-[240px] lg:w-[240px]" : "w-20"
        } duration-300 overflow-y-auto overflow-x-hidden bg-darkBlue`}
      >
        <div
          className={`${
            !open && "gap-0 pr-0 pl-14 py-1.5"
          } flex items-center gap-2 pl-7 pr-6 py-4 justify-center cursor-pointer bg-background_gradientone transition-all duration-500`}
        >
          <div className="flex flex-col w-full gap-4 items-center border-b-[1px] py-3 border-lightgray">
            <div>
              <LargeLogo />
            </div>
            <p
              className={`${
                !open && "scale-0 hidden"
              } font-satoshiBold 2xl:text-[14px] xl:text-[14px] lg:text-[14px]  text-white`}
            >
              Festivals Post App
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-10 -top-3 z-20 bg-background_gradientone flex items-center justify-center text-white w-[24px] h-[24px] rounded-full">
              {/* <AiOutlineLeft onClick={() => setOpen(!open)} /> */}
            </div>
          </div>
        </div>

        <nav className="pl-7 pr-6 pt-7">
          <ul>
            <li onClick={() => toggleDropdown("dashboard")}>
              <Link
                to="/dashboard"
                onClick={() => handleLinkClick("/dashboard")}
                className={`${
                  activeLink === "/dashboard" ? "bg-purple" : ""
                } flex gap-2 h-[40px] ${
                  !open ? "px-1" : "px-2"
                } items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white transition-colors duration-500 hover:bg-purple`}
              >
                <div
                  onClick={() => toggleDropdown("dashboard")}
                  className="flex justify-between w-full items-center"
                >
                  <div className="flex gap-2 items-center">
                    <img src="/icons/category-2.svg" />
                    <span className={`${!open && "scale-0"}`}>Dashboard</span>
                  </div>
                </div>
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/user/all-users"
                onClick={() =>
                  handleLinkClick("/dashboard/user/all-users") &&
                  handleDropLinkClick("/dashboard/user/all-users")
                }
                className={`${
                  activeLink === "/dashboard/user/all-users" ? "bg-purple" : ""
                } flex gap-2 h-[40px] ${
                  !open ? "px-1" : "px-2"
                } items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white transition-colors duration-500 hover:bg-purple`}
              >
                <div
                  onClick={() => toggleDropdown("users")}
                  className="flex justify-between w-full items-center"
                >
                  <div className="flex gap-2 items-center">
                    <img src="/icons/profile-circle.svg" />
                    <span className={`${!open && "scale-0"}`}>Users</span>
                  </div>
                  <img src="/icons/arrow-right.svg" />
                </div>
              </Link>

              <UserSidebarDrop
                open={open}
                activeDropLink={activeDropLink}
                handleDropLinkClick={handleDropLinkClick}
                dropdowns={dropdowns}
              />
            </li>

            <li>
              <Link
                to={"/dashboard/category/all-category"}
                onClick={() =>
                  handleLinkClick("/dashboard/category/all-category") &&
                  handleDropLinkClick("/dashboard/category/all-category")
                }
                className={`${
                  activeLink === "/dashboard/category/all-category"
                    ? "bg-purple"
                    : ""
                }  ${
                  !open ? "px-[3.5px]" : "px-2"
                } flex gap-2 h-[40px] px-2 items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white transition-colors duration-500 hover:bg-purple`}
              >
                <div
                  onClick={() => toggleDropdown("category")}
                  className="flex justify-between w-full items-center"
                >
                  <div className="flex gap-2 items-center">
                    <img src="/icons/category.svg" />
                    <span className={`${!open && "scale-0"}`}>Category</span>
                  </div>
                  <img src="/icons/arrow-right.svg" />
                </div>
              </Link>

              <CategorySidebarDrop
                open={open}
                activeDropLink={activeDropLink}
                handleDropLinkClick={handleDropLinkClick}
                dropdowns={dropdowns}
              />
            </li>

            <li>
              <Link
                to="/dashboard/festival/all-festival"
                onClick={() =>
                  handleLinkClick("/dashboard/festival/all-festival")
                }
                className={`${
                  activeLink === "/dashboard/festival/all-festival"
                    ? "bg-purple"
                    : ""
                } ${
                  !open ? "px-[3.5px]" : "px-2"
                } flex gap-2 h-[40px] px-2 items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white transition-colors duration-500 hover:bg-purple`}
              >
                <div
                  onClick={() => toggleDropdown("festival")}
                  className="flex justify-between w-full items-center"
                >
                  <div className="flex gap-2 items-center">
                    <img src="/icons/category.svg" />
                    <span className={`${!open && "scale-0"}`}>Festival</span>
                  </div>
                  <img src="/icons/arrow-right.svg" />
                </div>
              </Link>

              <FestivalSidebarDrop
                open={open}
                activeDropLink={activeDropLink}
                handleDropLinkClick={handleDropLinkClick}
                dropdowns={dropdowns}
              />
            </li>

            <li>
              <Link
                to={"/dashboard/app-setting/app-popup"}
                onClick={() =>
                  handleLinkClick("/dashboard/app-setting/app-popup")
                }
                className={`${
                  activeLink === "/dashboard/app-setting/app-popup"
                    ? "bg-purple"
                    : ""
                } ${
                  !open ? "px-[3.5px]" : "px-2"
                } flex gap-2 h-[40px] px-2 items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white transition-colors duration-500 hover:bg-purple`}
              >
                <div
                  onClick={() => toggleDropdown("appSettings")}
                  className="flex justify-between w-full items-center"
                >
                  <div className="flex gap-2 items-center">
                    <img src="/icons/setting.svg" />
                    <span className={`${!open && "scale-0"}`}>
                      App Settings
                    </span>
                  </div>
                  <img src="/icons/arrow-right.svg" />
                </div>
              </Link>

              <AppSettingsSidebarDrop
                open={open}
                activeDropLink={activeDropLink}
                handleDropLinkClick={handleDropLinkClick}
                dropdowns={dropdowns}
              />
            </li>

            <li>
              <Link
                to={"/dashboard/admin-setting/change-password"}
                onClick={() =>
                  handleLinkClick("/dashboard/admin-setting/change-password")
                }
                className={`${
                  activeLink === "/dashboard/admin-setting/change-password"
                    ? "bg-purple"
                    : ""
                } ${
                  !open ? "px-[3.5px]" : "px-2"
                } flex gap-2 h-[40px] px-2 items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white transition-colors duration-500 hover:bg-purple`}
              >
                <div
                  onClick={() => toggleDropdown("adminSettings")}
                  className="flex justify-between w-full items-center"
                >
                  <div className="flex gap-2 items-center">
                    <img src="/icons/setting-2.svg" />
                    <span className={`${!open && "scale-0"}`}>
                      Admin Settings
                    </span>
                  </div>
                  <img src="/icons/arrow-right.svg" />
                </div>
              </Link>

              <AdminSettingsSidebarDrop open={open} dropdowns={dropdowns} />
            </li>
          </ul>
        </nav>

        <LogoutContainer open={open} />
      </div>
    </div>
  );
};

export default Sidebar;
