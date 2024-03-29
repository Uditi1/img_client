import React, { useEffect, useState } from "react";
import Header from "../../ui/header/Header";
import TableContainer from "../../ui/tableElements/TableContainer";
import SearchBar from "../../ui/searchBar/SearchBar";
import Dropdown from "../../ui/dropdown/Dropdown";
import Button from "../../ui/buttons/Button";
import TableHeader from "../../ui/tableElements/TableHeader";
import { useNavigate } from "react-router-dom";
import TableData from "../../components/festival/TableData";
import { Endpoints } from "../../api/endpoints";
import { FetchApi } from "../../api/fetchApi";
import { toast } from "react-toastify";
import Pagination from "../../ui/pagination/Pagination";

const AllFestival = () => {
  const navigate = useNavigate();
  const [festivalList, setFestivalList] = useState([]);
  const [respFestivalList, setRespFestivalList] = useState([]);
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageToLoad, SetPageToLoad] = useState(0);
  const allCategoryTableHeaderList = [
    "Festival Name",
    "Uploaded Image",
    "Created on",
    "Publish",
    "Action",
  ];

  //festivalList api call started
  const getFestival = async (e) => {
    try {
      let resp = await FetchApi(
        Endpoints.list +
          `?tag=festival` +
          "&skip=" + pageToLoad +
          `${search ? "&name=" + search : ""}` +
          `${dropdown ? "&starred=" + dropdown : ""}`
      );
      if (resp?.status === "success") {
        setFestivalList(resp?.data);
        setRespFestivalList(resp)
      }
      if (resp && resp.status === 409) {
        toast.error(resp?.data?.message);
      }
    } catch (e) {
      console.log("registerErr__", JSON.stringify(e.response, null, 4));
    }
  };
  //festivalList api call end

  useEffect(() => {
    getFestival();
  }, [search, dropdown, pageToLoad]);

  return (
    <div className="p-7 flex flex-col h-full">
      <Header title="All Festival Category" />

      <TableContainer
        leftOneElement={<SearchBar onSearch={setSearch} />}
        left={true}
        leftTwoElement={<Dropdown onDropdown={setDropdown} isActive={false} />}
        rightOneElement={
          <Button
            onClick={() => navigate("/dashboard/festival/add-new-festival")}
            className="bg-purple text-white w-[160px] h-[40px] text-[14px]"
          >
            + Add New Festival
          </Button>
        }
      >
        <TableHeader tHeading={allCategoryTableHeaderList}>
          <TableData data={festivalList} getFestival={getFestival} />
        </TableHeader>
      </TableContainer>

      <Pagination
        onPageChange={SetPageToLoad}
        onItemsChanged={setItemsPerPage}
        defaultCount={itemsPerPage}
        totalPages={Math.ceil(respFestivalList?.total / itemsPerPage)}
      />

    </div>
  );
};

export default AllFestival;
