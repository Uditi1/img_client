import React, { useEffect, useState } from "react";
import Button from "../../ui/buttons/Button";
import InputBox from "../../ui/inputs/InputBox";
import { FetchApi } from "../../api/fetchApi";
import { Endpoints } from "../../api/endpoints";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addTagToCat, setCatTag } from "../../slice/categorySlice";
import { ValidateList, ValidationTypes } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

const AddTagForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Tag } = useSelector((state) => state.categorySlice);
  const [tagName, setTagName] = useState("");
  const [getTags, setGetTags] = useState([]);

  

 

  useEffect(() => {
    const updateTagsAndGuestUsers = async () => {
      console.log('Tag updated', JSON.stringify(Tag));
  
      if (Tag.length > 0) {
        localStorage.setItem("tagList", JSON.stringify(Tag));
  
        let obj = {
          tags: Tag,
        };
  
        console.log("this is obj__", Tag);
  
        try {
          let resp = await FetchApi(Endpoints.updateTagsAndGuestUsers, obj);
          if (resp?.status === "success") {
            toast.success("New Tag Added");
            navigate("/dashboard/category/all-category");
            dispatch(setCatTag([]))
          }
          if (resp && resp.status === 409) {
            toast.error(resp?.data?.message);
          }
        } catch (e) {
          console.log("registerErr__", JSON.stringify(e.response, null, 4));
        }
      }
    };
  
    updateTagsAndGuestUsers(); // Call the async function
  }, [Tag]);

  const createTag = async (e) => {
    e.preventDefault();
    let validate_arr = [
      [tagName, ValidationTypes.Empty, "Please enter Tag Name"],
    ];
    let validate = await ValidateList(validate_arr);
    if (!validate) {
      return;
    }

    // Dispatch the action to add the new tag to the array
    dispatch(setCatTag(getTags));
    dispatch(addTagToCat([tagName]));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let resp = await FetchApi(Endpoints.getSettings);
        if (resp?.status === "success") {
          setGetTags(resp?.data?.tags);
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
    <div className="w-full mt-4 flex justify-center">
      <form
        onSubmit={createTag}
        className="w-[560px] h-[244px] bg-white rounded-[20px] p-5 flex flex-col gap-4 justify-center"
      >
        <InputBox
          label="Tag Name"
          onChange={(e) => setTagName(e.target.value)}
          className="w-full border-lightgray"
          placeholder="Enter Tag Name"
        />

        <Button
          type="submit"
          className="bg-purple text-white self-end w-[180px] h-[50px] text-[14px]"
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default AddTagForm;
