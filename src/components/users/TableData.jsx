import React, { useState } from "react";
import TableButton from "../../ui/buttons/TableButton";
import moment from "moment";
import { Endpoints } from "../../api/endpoints";
import Modal from "../../ui/modal/Modal";
import BlockUserData from "./BlockUserData";

const TableData = ({ data, getAllUsers }) => {
  const [blockModal, setBlockModal] = useState(false);
  const [userId, setUserId] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const toggleBlockModal = (index, id, status) => {
    setUserId(id);
    setUserStatus(status);
    setBlockModal(true);
    setSelectedRowIndex(index);
  };

  return (
    <>
      {data?.map((item, index) => {
         const isOddRow = index % 2 === 0; // Check if the row index is odd
        
        return (
          <tr
            key={index}
            className={`w-full ${isOddRow ? "bg-[#F7F4FF]" : ""}`}
          >
            <td className="font-poppins 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[12px] pl-6 pt-[1vw] pb-[1vw] text-black_two">
              {item?.user_name}
            </td>
            <td className="font-poppins 2xl:text-[16px] xl:text-[14px] md:text-[12px] pt-[1vw] pb-[1vw] text-black_two">
              <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={
                    import.meta.env.VITE_API_URL +
                    Endpoints?.getProfileImage +
                    item?.profile
                  }
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/images/profiledefault.png";
                  }}
                />
              </div>
            </td>
            <td className="font-poppins 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[12px] text-black_two">
              {item?.email}
            </td>
            <td className="font-poppins 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[12px] text-black_two">
              {item?.liked?.length}
            </td>
            <td className="font-poppins 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[12px] text-black_two">
              {item?.saved?.length}
            </td>
            <td className="font-poppins 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[12px] text-black_two">
              {moment(item?.updatedAt).format("LLL")}
            </td>
            <td className="font-poppins text-[16px]  text-black_two">
              <TableButton
                className={`2xl:w-[72px] xl:w-[70px] lg:w-[70px] md:w-[58px] h-[32px] ${
                  item?.status === false
                    ? "bg-red text-red"
                    : "bg-green text-green"
                } bg-opacity-[0.1]`}
              >
                {item?.status === false ? "Inactive" : "Active"}
              </TableButton>
            </td>
            <td className="font-poppins pl-2 pr-6 text-[16px] text-black_two">
              <TableButton
                onClick={() => toggleBlockModal(index, item?._id, item?.status)}
                className={`w-[72px] h-[32px] bg-red text-white`}
              >
                {item?.status === false ? "Unblock" : "Block"}
              </TableButton>
            </td>
          </tr>
        );
      })}

      {data?.length <= 0 && (
        <tr>
          <td className="text-center" colSpan={7}>
            <div className="flex items-center justify-center h-full">
              <p className="font-satoshiRegular text-[15px]">No Data Found</p>
            </div>
          </td>
        </tr>
      )}

      {blockModal !== false && (
        <Modal
          toggleModal={() => toggleBlockModal(null)}
          className="h-[272px] w-[350px] top-[38%] bg-white"
          modal={blockModal}
        >
          <BlockUserData
            id={userId}
            getAllUsers={getAllUsers}
            status={userStatus}
            setBlockModal={setBlockModal}
            setSelectedRowIndex={setSelectedRowIndex}
          />
        </Modal>
      )}
    </>
  );
};

export default TableData;
