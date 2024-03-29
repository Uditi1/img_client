import React from "react";
import { Link } from "react-router-dom";

const AdminSettingsSidebarDrop = ({ dropdowns, open }) => {
  return (
    <>
      {dropdowns?.adminSettings && (
        <ul>
          <li>
            <Link
              to={"/dashboard/admin-setting/change-password"}
              className="flex justify-between h-[40px] px-2 items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white transition-colors duration-500 hover:bg-brightpurple"
            >
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 items-center">
                  <img src="/icons/circle.svg" />
                  <span className={`${!open && "scale-0"}`}>
                    Change Password
                  </span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default AdminSettingsSidebarDrop;
