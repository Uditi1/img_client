import React, { useState } from "react";
import Modal from "../../ui/modal/Modal";
import DeleteGreetData from "./DeleteGreetData";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryTag } from "../../slice/categorySlice";
import moment from "moment";
import { FetchApi } from "../../api/fetchApi";
import { Endpoints } from "../../api/endpoints";
import { toast } from "react-toastify";

const TableData = ({ data, getAllCategory }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedTag = useSelector((state) => state.categorySlice.categoryTag);
  const [deleteModal, setDeleteModal] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [toggleStates, setToggleStates] = useState({});

  const toggleDeleteModal = (index, id, status) => {
    setCategoryId(id);
    // setUserStatus(status)
    setDeleteModal(true);
    setSelectedRowIndex(index);
  };

  const handleCheckboxChange = (tag, id) => {
    // Toggle the selected state
    if (selectedTag === tag) {
      setCategoryId("");
      dispatch(setCategoryTag("")); // Unselect the tag
    } else {
      setCategoryId(id);
      dispatch(setCategoryTag(tag)); // Select the tag
    }
  };

  const handleToggle = async (index, id) => {
    try {
      const newToggleStates = { ...toggleStates };
      newToggleStates[index] = !newToggleStates[index];
      setToggleStates(newToggleStates);

      // Call the toggle API
      await toggle(id);
    } catch (error) {
      console.error("Error toggling:", error);
    }
  };

  //categoryToggle api call started
  const toggle = async (id) => {
    try {
      let resp = await FetchApi(Endpoints.toggle, { id });
      if (resp?.status === "success") {
        toast.success(resp?.message);
        await getAllCategory();
      }
      if (resp && resp.status === 409) {
        toast.error(resp?.data?.message);
      }
    } catch (e) {
      console.log("registerErr__", JSON.stringify(e.response, null, 4));
    }
  };
  //categoryToggle api call end

  return (
    <>
      {data?.map((item, index) => {
        const isTagSelected = categoryId === item?._id;
        const isOddRow = index % 2 === 0; // Check if the row index is odd

        return (
          <tr
            key={index}
            className={`w-full ${isOddRow ? "bg-[#F7F4FF]" : ""}`}
          >
            <td className="font-poppins 2xl:text-[16px] pl-6 xl:text-[14px] lg:text-[14px] md:text-[12px] pt-[1vw] pb-[1vw] text-black_two">
              {item?.name}
            </td>
            <td className="font-poppins 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[12px] text-black_two">
              {item?.images?.length}
            </td>
            <td className="font-poppins 2xl:text-[16px] xl:text-[14px] lg:text-[14px] md:text-[12px] text-black_two">
              {moment(item?.updatedAt).format("LLL")}
            </td>
            <td className="font-poppins text-[16px] text-black_two">
              <div
                style={{
                  backgroundColor: item?.starred ? "#5CB176" : "#CDB9FF",
                }}
                className="md:w-[38px] md:h-[22px] 2xl:w-[40px] 2xl:h-[24px] xl:w-[40px] xl:h-[24px] lg:w-[40px] lg:h-[24px]  w-[40px] h-[24px] flex items-center rounded-[24px] p-1 cursor-pointer"
                onClick={() => handleToggle(index, item?._id)}
              >
                {/* Switch */}
                <div
                  className={
                    "bg-white md:w-[16px] md:h-[16px] 2xl:w-[16px] 2xl:h-[16px] xl:w-[16px] xl:h-[16px] h-3 w-3 rounded-full shadow-md transform duration-300 ease-in-out" +
                    (item?.starred ? "transform translate-x-4" : "")
                  }
                ></div>
              </div>
            </td>
            <td className="font-poppins text-[16px] text-black_two">
              <div className="flex gap-3 items-center">
                <img
                  className="cursor-pointer 2xl:w-[24px] 2xl:h-[24px] xl:w-[24px] xl:h-[24px] lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px]"
                  onClick={() =>
                    toggleDeleteModal(index, item?._id, item?.starred)
                  }
                  src="/icons/trash.svg"
                />
                <img
                  className="cursor-pointer 2xl:w-[24px] 2xl:h-[24px] xl:w-[24px] xl:h-[24px] lg:w-[24px] lg:h-[24px] md:w-[20px] md:h-[20px]"
                  onClick={() =>
                    navigate(`/dashboard/category/daily-greetings/${item?._id}`)
                  }
                  src="/icons/eye.svg"
                />
              </div>
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

      {deleteModal !== false && (
        <Modal
          toggleModal={() => toggleDeleteModal(null)}
          className="h-[272px] w-[350px] top-[38%] bg-white"
          modal={deleteModal}
        >
          <DeleteGreetData
            id={categoryId}
            getAllCategory={getAllCategory}
            setDeleteModal={setDeleteModal}
            setSelectedRowIndex={setSelectedRowIndex}
          />
        </Modal>
      )}
    </>
  );
};

export default TableData;
