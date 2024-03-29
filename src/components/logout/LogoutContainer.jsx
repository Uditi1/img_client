import React, { useState } from "react";
import Modal from "../../ui/modal/Modal";
import LogoutData from "./LogoutData";

const LogoutContainer = ({open}) => {
  const [logoutModal, setLogoutModal] = useState(false);
  const toggleLogoutModal = () => {
    setLogoutModal(!logoutModal);
  };

  return (
    <>
      <div className="flex pl-7 pr-6 mt-20 pt-11  border-t-[1px] border-white gap-2 px-2 items-center  font-satoshiMedium text-[14px] text-white transition-colors duration-500 ">
        <div
          onClick={() => toggleLogoutModal()}
          className={`cursor-pointer flex gap-2 ${!open ? "h-[40px] w-[40px]" : "h-[40px] w-full" }  px-2 rounded-[6px] items-center hover:bg-purple`}
        >
          <img className={`${!open && ` h-[20px] w-[20px]`}`} src="/icons/logout.svg" />
          <p className={`font-satoshiMedium text-[14px] text-white ${!open && "scale-0"}`}>Log Out</p>
        </div>
      </div>

      {logoutModal && (
        <Modal
          toggleModal={toggleLogoutModal}
          className="w-[350px] h-[272px] top-[38%] bg-white"
          modal={logoutModal}
        >
          <LogoutData toggleLogoutModal={toggleLogoutModal} />
        </Modal>
      )}
    </>
  );
};

export default LogoutContainer;
