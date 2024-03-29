import React, { useEffect, useState } from "react";
import { FetchApi } from "../../api/fetchApi";
import { Endpoints } from "../../api/endpoints";

const SelectTagContainer = ({ onDropdown }) => {
  const [getTags, setGetTags] = useState();
  const [dropdown, setDropdown] = useState();

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

  useEffect(() => {
    onDropdown?.(dropdown);
  }, [dropdown]);

  return (
    <div className="w-full flex flex-col ">
      <label className="block mb-1 font-satoshiMedium text-darkBlue text-[16px]">
        Tag Name
      </label>
      <select
        onChange={(e) => setDropdown(e.target.value)}
        className="border-[1px] bg-white font-satoshiRegular text-[14px] text-darkBlue px-2 w-full h-[60px] rounded-[10px] border-lightgray"
      >
        <option value="">All Tags</option>
        {getTags?.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectTagContainer;
