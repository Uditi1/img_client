import React, { useRef, useState } from "react";
import InputBox from "../../ui/inputs/InputBox";
import Button from "../../ui/buttons/Button";
import { Endpoints } from "../../api/endpoints";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { CommonAPi } from "../../api/commonApi";
import { ValidateList, ValidationTypes } from "../../utils/helpers";

const AddImageForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  // const [imageTitle, setImageTitle] = useState("");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  //imageAdd api call started
  const addImages = async (e) => {
    e.preventDefault();
    let validate_arr = [
      // [imageTitle, ValidationTypes.Empty, "Please enter Image Title"],
      [selectedFile, ValidationTypes.Empty, "Please select a File"],
    ];
    let validate = await ValidateList(validate_arr);
    if (!validate) {
      return;
    }

    const formData = new FormData();
    formData.append("category_id", id);
    formData.append("image", selectedFile);

    try {
      let resp = await CommonAPi(Endpoints.addImage, formData);
      if (resp?.status === "success") {
        toast.success("New Image Added");
        navigate(`/dashboard/category/daily-greetings/${id}`);
      }
      if (resp && resp.status === 409) {
        toast.error(resp?.data?.message);
      }
    } catch (e) {
      console.log("registerErr__", JSON.stringify(e.response, null, 4));
    }
  };
  //imageAdd api call end

  return (
    <div className="w-full mt-4 flex justify-center">
      <form
        onSubmit={addImages}
        className={`w-[560px] ${
          selectedFile ? "h-[450px]" : "h-[400px]"
        } bg-white rounded-[20px] p-5 flex flex-col gap-6 justify-center`}
      >
        {/* <InputBox
          onChange={(e) => setImageTitle(e.target.value)}
          label="Image Title"
          className="w-full border-lightgray"
          placeholder="Enter Images Title"
        /> */}

        <div className="flex flex-col">
          <label className="block mb-1 font-satoshiMedium text-darkBlue text-[16px]">
            Image
          </label>
          <div
            className="w-[500px] gap-3 h-[210px] flex items-center flex-col justify-center border-lightgray rounded-[10px] border-[1px]"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={openFileDialog}
          >
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-purple bg-opacity-[20%]">
              <img src="/icons/export.svg" />
            </div>

            <p className="text-gray text-[16px] font-satoshiRegular">
              Drop your files here or{" "}
              <span className="text-purple">browse</span>
            </p>
          </div>
        </div>

        {selectedFile && (
          <div className="w-full flex justify-between">
            <div className="flex gap-2">
              <div className="w-[40px] h-[40px] overflow-hidden flex items-center justify-center rounded-full bg-purple bg-opacity-[20%]">
                <img
                  className="w-full h-full"
                  src={URL.createObjectURL(selectedFile)}
                />
              </div>

              <div className="flex flex-col">
                <p className="text-darkBlue text-[16px] font-satoshiMedium">
                  {selectedFile?.name}
                </p>
                <p className="text-gray text-[14px] font-satoshiRegular">
                  {selectedFile?.size} KB
                </p>
              </div>
            </div>

            <img
              className="cursor-pointer"
              onClick={() => setSelectedFile(null)}
              src="/icons/close.svg"
            />
          </div>
        )}

        <Button
          type="submit"
          className="bg-purple text-white self-end w-[180px] h-[50px] text-[14px]"
        >
          Upload
        </Button>
      </form>
    </div>
  );
};

export default AddImageForm;
