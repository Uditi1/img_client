import React from "react";
import { Link } from "react-router-dom";

const CategorySidebarDrop = ({
  dropdowns,
  open,
  handleDropLinkClick,
  activeDropLink,
}) => {
  return (
    <>
      {dropdowns?.category && (
        <ul>
          <li>
            <Link
              to={"/dashboard/category/all-category"}
              onClick={() =>
                handleDropLinkClick("/dashboard/category/all-category")
              }
              className={`flex justify-between h-[40px] px-2 items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white ${
                activeDropLink === "/dashboard/category/all-category"
                  ? "opacity-100"
                  : "opacity-[0.5]"
              } transition-colors duration-500 hover:bg-brightpurple`}
            >
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 items-center">
                  {activeDropLink === "/dashboard/category/all-category" ? (
                    <img src="/icons/circle.svg" />
                  ) : (
                    <img src="/icons/circle.svg" />
                  )}
                  <span className={`${!open && "scale-0"}`}>All Category</span>
                </div>
              </div>
            </Link>
          </li>

          <li>
            <Link
              to={"/dashboard/category/add-new-category"}
              onClick={() =>
                handleDropLinkClick("/dashboard/category/add-new-category")
              }
              className={`flex justify-between h-[40px] px-2 items-center rounded-[6px] mb-2 font-satoshiMedium text-[14px] text-white ${
                activeDropLink === "/dashboard/category/add-new-category"
                  ? "opacity-100"
                  : "opacity-[0.5]"
              } transition-colors duration-500 hover:bg-brightpurple`}
            >
              <div className="flex justify-between w-full items-center">
                <div className="flex gap-2 items-center">
                  {activeDropLink === "/dashboard/category/add-new-category" ? (
                    <img src="/icons/circle.svg" />
                  ) : (
                    <img src="/icons/circle.svg" />
                  )}
                  <span className={`${!open && "scale-0"}`}>
                    Add New Category
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

export default CategorySidebarDrop;
