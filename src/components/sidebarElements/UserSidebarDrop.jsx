import React from "react";
import { Link } from "react-router-dom";

const UserSidebarDrop = ({
  dropdowns,
  open,
  handleDropLinkClick,
  activeDropLink,
}) => {
  return (
    <>
      {dropdowns?.users && (
        <ul>
          <li>
            <Link
              to={"/dashboard/user/all-users"}
              onClick={() => handleDropLinkClick("/dashboard/user/all-users")}
              className={`flex justify-between h-[40px] px-2 items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white ${
                activeDropLink === "/dashboard/user/all-users"
                  ? "opacity-100"
                  : "opacity-[0.5]"
              } transition-colors duration-500 hover:bg-brightpurple`}
            >
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 items-center">
                {activeDropLink === "/dashboard/user/all-users" ? (
                    <img src="/icons/circle.svg" />) :  <img src="/icons/circle.svg" />
                  }
                  <span className={`${!open && "scale-0"}`}>All Users</span>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to={"/dashboard/user/guest-users"}
              onClick={() => handleDropLinkClick("/dashboard/user/guest-users")}
              className={`flex justify-between h-[40px] px-2 items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white ${
                activeDropLink === "/dashboard/user/guest-users"
                  ? "opacity-100"
                  : "opacity-[0.5]"
              } transition-colors duration-500 hover:bg-brightpurple`}
            >
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 items-center">
                  {activeDropLink === "/dashboard/user/guest-users" ? (
                    <img src="/icons/circle.svg" />) :  <img src="/icons/circle.svg" />
                  }
                  <span className={`${!open && "scale-0"}`}>Guest Users</span>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to={"/dashboard/user/blocked-users"}
              onClick={() =>
                handleDropLinkClick("/dashboard/user/blocked-users")
              }
              className={`flex justify-between h-[40px] px-2 items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white ${
                activeDropLink === "/dashboard/user/blocked-users"
                  ? "opacity-100"
                  : "opacity-[0.5]"
              } transition-colors duration-500 hover:bg-brightpurple`}
            >
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 items-center">
                {activeDropLink === "/dashboard/user/blocked-users" ? (
                    <img src="/icons/circle.svg" />) :  <img src="/icons/circle.svg" />
                  }
                  <span className={`${!open && "scale-0"}`}>Blocked Users</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default UserSidebarDrop;
