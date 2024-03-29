import React, { useEffect, useState } from "react";
import Header from "../../ui/header/Header";
import TableContainer from "../../ui/tableElements/TableContainer";
import SearchBar from "../../ui/searchBar/SearchBar";
import TableHeader from "../../ui/tableElements/TableHeader";
import Button from "../../ui/buttons/Button";
import { useNavigate } from "react-router-dom";
import { FetchApi } from "../../api/fetchApi";
import { Endpoints } from "../../api/endpoints";
import { toast } from "react-toastify";
import TableData from "../../components/category/TableData";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../ui/pagination/Pagination";

const AllCategory = () => {
  const navigate = useNavigate();
  const selectedTag = useSelector((state) => state.categorySlice.categoryTag);
  const [categoryList, setCategoryList] = useState([]);
  const [respCategoryList, setRespCategoryList] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [search, setSearch] = useState("")
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageToLoad, SetPageToLoad] = useState(0);

  const allCategoryTableHeaderList = [
    "Category Name",
    "Uploaded Image",
    "Created on",
    "Publish",
    "Action",
  ];

  const handleNavigate = () => {
    if(selectedTag != "") {
      navigate('/dashboard/category/add-new-category')
    } else {
      toast.error("Please select a checkbox")
    }
  }

  // Toggle the select all checkbox
  const toggleSelectAll = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
  };

  //categoryList api call started
  const getAllCategory = async (e) => {
    try {
      let resp = await FetchApi(Endpoints.list +  "?skip=" + pageToLoad + `${search && '&name='+search}`);
      if (resp?.status === "success") {
        setCategoryList(resp?.data);
        setRespCategoryList(resp)
      }
      if (resp && resp.status === 409) {
        toast.error(resp?.data?.message);
      }
    } catch (e) {
      console.log("registerErr__", JSON.stringify(e.response, null, 4));
    }
  };
  //categoryList api call end

  useEffect(() => {
    getAllCategory();
  }, [search, pageToLoad]);

  return (
    <div className="p-7 flex flex-col h-full">
      <Header title="All Category" />

      <TableContainer
        leftOneElement={<SearchBar onSearch={setSearch} />}
        rightOneElement={
          <Button
            onClick={() => navigate('/dashboard/category/add-new-tag')}
            className="bg-purple w-[160px] h-[40px] text-white text-[14px]"
          >
            + Add New Tag
          </Button>
        }
      >
        <TableHeader tHeading={allCategoryTableHeaderList}>
          <TableData getAllCategory={getAllCategory} data={categoryList} />
        </TableHeader>
      </TableContainer>

      <Pagination
        onPageChange={SetPageToLoad}
        onItemsChanged={setItemsPerPage}
        defaultCount={itemsPerPage}
        totalPages={Math.ceil(respCategoryList?.total / itemsPerPage)}
      />
    </div>
  );
};

export default AllCategory;
