import React from "react";
import Button from "../../ui/buttons/Button";
import { Endpoints } from "../../api/endpoints";
import { FetchApi } from "../../api/fetchApi";
import { toast } from "react-toastify";

const ImageDeleteData = ({ setDeleteModal, getImages, setSelectedRowIndex, id }) => {
  

  const onClose = () => {
    setDeleteModal(false);
    setSelectedRowIndex(null);
  };

  //deleteImage api call started
  const deleteImage = async (e) => {
    let obj = {
        image_id: id,
    };

    try {
      let resp = await FetchApi(Endpoints.imageDelete, obj);
      if (resp?.status === "success") {
        toast.success(resp?.message);
        getImages()
        onClose();
      }
      if (resp && resp.status === 409) {
        toast.error(resp?.data?.message);
      }
    } catch (e) {
      console.log("registerErr__", JSON.stringify(e.response, null, 4));
    }
  };
  //deleteImage api call end

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
        <Button onClick={deleteImage} className="w-[130px] h-[55px] bg-red text-white">Yes</Button>
      </div>
    </div>
  );
};

export default ImageDeleteData;
