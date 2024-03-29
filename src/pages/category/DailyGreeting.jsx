import React from "react";
import Header from "../../ui/header/Header";
import Button from "../../ui/buttons/Button";
import ImagesContainer from "../../components/category/ImagesContainer";
import { useNavigate, useParams } from "react-router-dom";

const DailyGreeting = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="p-7 flex flex-col h-full">
      <Header title="Daily Greetings Details" />

      <div className=" w-full mt-3 flex flex-col gap-4">
        <Button
          onClick={() => navigate(`/dashboard/category/add-new-image/${id}`)}
          className="self-end w-[150px] h-[40px] bg-purple text-white text-[14px]"
        >
          + Add New Image
        </Button>

        <ImagesContainer />
      </div>
    </div>
  );
};

export default DailyGreeting;
