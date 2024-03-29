import React, { useState } from "react";
import Button from "../ui/buttons/Button";
import Modal from "../ui/modal/Modal";
import LogoutData from "../components/logout/LogoutData";

const Navbar = () => {
  const [logoutModal, setLogoutModal] = useState(false);
  const toggleLogoutModal = () => {
    setLogoutModal(!logoutModal);
  };

  return (
    <>
      <nav className="bg-white sticky shadow-sm top-0">
        <div className="max-w-screen-xl flex flex-wrap w-[90%] items-center justify-end mx-auto p-4">
          <div className="flex items-center gap-5 md:order-2">
            <Button
              onClick={() => toggleLogoutModal()}
              className="bg-purple text-white h-[40px] w-[120px]"
            >
              Log out
            </Button>
          </div>
        </div>
      </nav>
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

export default Navbar;
