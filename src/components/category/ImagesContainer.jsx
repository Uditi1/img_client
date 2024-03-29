import React, { useEffect, useState } from "react";
import OneImage from "./OneImage";
import { FetchApi } from "../../api/fetchApi";
import { Endpoints } from "../../api/endpoints";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Modal from "../../ui/modal/Modal";
import ImageDeleteData from "./ImageDeleteData";

const ImagesContainer = () => {
  const { id } = useParams();
  const [imageList, setImageList] = useState([]);
  const [imageId, setImageId] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const toggleDeleteModal = (index, id) => {
    setImageId(id);
    setDeleteModal(true);
    setSelectedRowIndex(index);
  };


  //imageList api call started
  const getImages = async (e) => {
    let obj = {
      category_id: id,
    };

    try {
      let resp = await FetchApi(Endpoints.getImages, obj);
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
  //imageList api call end

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div
      className={`w-full ${
        imageList?.length <= 0 ? "h-[100px]" : "max-h-[900px]"
      }  rounded-[20px] flex gap-4 flex-wrap bg-white px-8 pt-6`}
    >
      <div className="flex  gap-4 flex-wrap overflow-y-scroll no-scrollbar">
        {imageList?.map((item, index) => {
          return (
            <OneImage
              key={index}
              bookmarkCount={item?.bookmarked?.length}
              likeCount={item?.likes}
              srcimage={
                import.meta.env.VITE_API_URL + Endpoints?.getImage + item?.url
              }
              onClickDelete={() => toggleDeleteModal(index, item?._id)}
            />
          );
        })}
        {imageList?.length <= 0 && (
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
          <ImageDeleteData
            id={imageId}
            getImages={getImages}
            setDeleteModal={setDeleteModal}
            setSelectedRowIndex={setSelectedRowIndex}
          />
        </Modal>
      )}
    </div>
  );
};

export default ImagesContainer;
