import React from "react";

const Modal = ({ className, modelContent, children, toggleModal, modal }) => {
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="fixed z-40 top-0 bottom-0 right-0 left-0 min-w-[100vw] min-h-[100vh]">
      <div
        onClick={toggleModal}
        className="fixed top-0 bottom-0 right-0 rounded-[20px] left-0 min-w-[100vw] min-h-[100vh] bg-[#00000080]"
      ></div>
      <div
        className={`absolute  px-7 left-[50%] rounded-[20px] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center ${
          className || ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
