import React, { useEffect, useRef } from "react";
import Button from "../../ui/buttons/Button";
import { toast } from "react-toastify";
import { Endpoints } from "../../api/endpoints";
import { FetchApi } from "../../api/fetchApi";


const ImageData = ({
  setDeleteModal,
  imageList,
  setImageList,
  setSelectedRowIndex,
  id,
}) => {
  const deleteImage = async () => {
    try {
      // Assuming popup is an array of objects and you want to remove the element at index 'id'

      const updatedPopup = imageList?.filter((_, index) => index !== id);  
      // Update the Redux state with the modified popup
      // dispatch(setPopup(updatedPopup));
      // Perform the API call
      const obj = {
        slider: updatedPopup,
      };

      const resp = await FetchApi(Endpoints.updateTagsAndGuestUsers, obj);

      if (resp?.status === "success") {
        toast.success("Image deleted successfully");
        setImageList((prevImageList) => {
          const updatedSliders = [...prevImageList.sliders];
          updatedSliders.splice(id, 1);

          return { ...prevImageList, sliders: updatedSliders };
        });
      } else {
        toast.error("Failed to delete image");
      }

      onClose();
    } catch (error) {
      console.error("Error deleting image:", error);
      toast.error("Error deleting image");
    }
  };

  const onClose = () => {
    setDeleteModal(false);
    setSelectedRowIndex(null);
  };

  return (
    <div className="w-full h-full justify-center items-center flex flex-col gap-4">
      <div className="w-[60px] h-[60px] bg-opacity-[20%] bg-red rounded-full flex items-center justify-center overflow-hidden">
        <img src={`/icons/trash.svg`} />
      </div>
      <div className="flex flex-col ">
        <p className="font-satoshiBold text-[20px] text-center">Delete Image</p>
        <p className="font-satoshiRegular leading-[28px] text-[16px] w-[280px] text-center">
          Are you sure you want to Delete This Image?
        </p>
      </div>

      <div className="flex w-full justify-between">
        <Button
          onClick={onClose}
          className="w-[130px] h-[55px] border-[1px] border-darkBlue text-darkBlue"
        >
          No
        </Button>
        <Button
          onClick={deleteImage}
          className="w-[130px] h-[55px] bg-red text-white"
        >
          Yes
        </Button>
      </div>
    </div>
  );
};

export default ImageData;
