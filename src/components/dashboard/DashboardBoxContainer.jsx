import React, { useEffect, useState } from "react";
import DashboardBox from "./DashboardBox";
import { FetchApi } from "../../api/fetchApi";
import { Endpoints } from "../../api/endpoints";
import { toast } from "react-toastify";

const DashboardBoxContainer = () => {
  const [userList, setUserList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [guestList, setGuestList] = useState({});
  const { guests } = guestList || {};

  //allUser api call started
  const getAllUsers = async (e) => {
    try {
      let resp = await FetchApi(Endpoints.getAllUsers);
      if (resp?.status === "success") {
        setUserList(resp);
      }
      if (resp && resp.status === 409) {
        toast.error(resp?.data?.message);
      }
    } catch (e) {
      console.log("registerErr__", JSON.stringify(e.response, null, 4));
    }
  };
  //allUser api call end

  //categoryList api call started
  const getAllCategory = async (e) => {
    try {
      let resp = await FetchApi(Endpoints.list);
      if (resp?.status === "success") {
        setCategoryList(resp);
      }
      if (resp && resp.status === 409) {
        toast.error(resp?.data?.message);
      }
    } catch (e) {
      console.log("registerErr__", JSON.stringify(e.response, null, 4));
    }
  };
  //categoryList api call end

  //guestUser api call started
  const getGuestUser = async (e) => {
    try {
      let resp = await FetchApi(Endpoints.getSettings);
      if (resp?.status === "success") {
        setGuestList(resp?.data);
      }
      if (resp && resp.status === 409) {
        toast.error(resp?.data?.message);
      }
    } catch (e) {
      console.log("registerErr__", JSON.stringify(e.response, null, 4));
    }
  };
  //guestUser api call end

  useEffect(() => {
    getAllUsers();
    getAllCategory();
    getGuestUser();
  }, []);

  return (
    <div className="flex gap-3 justify-between items-center">
      <DashboardBox
        srcicons="/icons/profilecircle-2.svg"
        title="Total Users"
        count={userList?.total}
      />
      <DashboardBox
        srcicons="/icons/tag-user.svg"
        title="Total Guest Users"
        count={guests?.length}
      />
      <DashboardBox
        srcicons="/icons/category-3.svg"
        title="Total Category"
        count={categoryList?.total}
      />
    </div>
  );
};

export default DashboardBoxContainer;
