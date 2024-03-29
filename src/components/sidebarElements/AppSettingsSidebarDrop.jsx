import React from "react";
import { Link } from "react-router-dom";

const AppSettingsSidebarDrop = ({
  dropdowns,
  open,
  handleDropLinkClick,
  activeDropLink,
}) => {
  return (
    <>
      {dropdowns?.appSettings && (
        <ul>
          <li>
            <Link
              to={"/dashboard/app-setting/app-popup"}
              onClick={() =>
                handleDropLinkClick("/dashboard/app-setting/app-popup")
              }
              className={`flex justify-between h-[40px] px-2 items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white ${
                activeDropLink === "/dashboard/app-setting/app-popup"
                  ? "opacity-100"
                  : "opacity-[0.5]"
              } transition-colors duration-500 hover:bg-brightpurple`}
            >
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 items-center">
                  {activeDropLink === "/dashboard/app-setting/app-popup" && (
                    <img src="/icons/circle.svg" />
                  )}
                  <span className={`${!open && "scale-0"}`}>App Popup</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default AppSettingsSidebarDrop;
