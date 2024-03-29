import React, { useEffect, useState } from "react";

import Modal from "../../ui/modal/Modal";
import OnePopup from "./OnePopup";
import { Endpoints } from "../../api/endpoints";
import { FetchApi } from "../../api/fetchApi";
import { toast } from "react-toastify";
import ImageData from "../../components/adminSetting/ImageData";
import { useDispatch } from "react-redux";


const ImagePopContainer = () => {

  const dispatch = useDispatch();
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [imageList, setImageList] = useState();
  const [imageId, setImageId] = useState("");

  const { sliders } = imageList || [];

  const toggleDeleteModal = (index) => {
    setImageId(index);
    setDeleteModal(true);
    setSelectedRowIndex(index);
  };

  //imageList api call started
  useEffect(() => {
    const fetchData = async () => {
      try {
        let resp = await FetchApi(Endpoints.getSettings);
        if (resp?.status === "success") {
          setImageList(resp?.data);
          
        }
        if (resp && resp.status === 409) {
          toast.error(resp?.data?.message);
        }
      } catch (e) {
        console.log("registerErr__", JSON.stringify(e.response, null, 4));
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={`w-full h-[800px] ${
        // imageList?.length <= 0 ? "h-[100px]" : "h-[902px]"
        ""
      }  rounded-[20px] flex gap-4 flex-wrap bg-white px-8 pt-6`}
    >
      <div className="flex gap-4 flex-wrap w-full overflow-y-scroll no-scrollbar">
        {sliders?.map((item, index) => {
          console.log(index);
          return (
            <OnePopup
              key={index}
              onClickDelete={() => toggleDeleteModal(index)}
              srcimage={
                import.meta.env.VITE_API_URL + Endpoints?.getSliderImage + item
              }
            />
          );
        })}

        {sliders?.length <= 0 && (
          <div className="flex w-full justify-center h-full">
            <p className="font-satoshiRegular text-[15px]"></p>No Greetings
            Found
          </div>
        )}
      </div>

      {deleteModal !== false && (
        <Modal
          toggleModal={() => toggleDeleteModal(null)}
          className="h-[272px] w-[350px] top-[38%] bg-white"
          modal={deleteModal}
        >
          <ImageData
            id={imageId}
            setImageList={setImageList}
            imageList={imageList?.sliders}
            setDeleteModal={setDeleteModal}
            setSelectedRowIndex={setSelectedRowIndex}
          />
        </Modal>
      )}
    </div>
  );
};

export default ImagePopContainer;
