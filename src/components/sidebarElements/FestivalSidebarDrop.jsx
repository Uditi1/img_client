import React from "react";
import { Link } from "react-router-dom";

const FestivalSidebarDrop = ({
  dropdowns,
  open,
  handleDropLinkClick,
  activeDropLink,
}) => {
  return (
    <>
      {dropdowns?.festival && (
        <ul>
          <li>
            <Link
              to={"/dashboard/festival/all-festival"}
              onClick={() =>
                handleDropLinkClick("/dashboard/festival/all-festival")
              }
              className={`flex justify-between h-[40px] px-2 items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white ${
                activeDropLink === "/dashboard/festival/all-festival"
                  ? "opacity-100"
                  : "opacity-[0.5]"
              } transition-colors duration-500 hover:bg-brightpurple`}
            >
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 items-center">
                  {activeDropLink === "/dashboard/festival/all-festival" ? (
                    <img src="/icons/circle.svg" />
                  ) : (
                    <img src="/icons/circle.svg" />
                  )}
                  <span className={`${!open && "scale-0"}`}>
                    All Festival Category
                  </span>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to={"/dashboard/festival/add-new-festival"}
              onClick={() =>
                handleDropLinkClick("/dashboard/festival/add-new-festival")
              }
              className={`flex justify-between h-[40px] px-2 items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white ${
                activeDropLink === "/dashboard/festival/add-new-festival"
                  ? "opacity-100"
                  : "opacity-[0.5]"
              } transition-colors duration-500 hover:bg-brightpurple`}
            >
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 items-center">
                  {activeDropLink === "/dashboard/festival/add-new-festival" ? (
                    <img src="/icons/circle.svg" />
                  ) : (
                    <img src="/icons/circle.svg" />
                  )}
                  <span className={`${!open && "scale-0"}`}>
                    Add New Festival
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

export default FestivalSidebarDrop;
