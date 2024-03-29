import React, { useEffect, useState } from "react";
import Header from "../../ui/header/Header";
import TableContainer from "../../ui/tableElements/TableContainer";
import SearchBar from "../../ui/searchBar/SearchBar";
import Dropdown from "../../ui/dropdown/Dropdown";
import TableHeader from "../../ui/tableElements/TableHeader";
import DateGroup from "../../utils/groups/DateGroup";
import { FetchApi } from "../../api/fetchApi";
import { Endpoints } from "../../api/endpoints";
import { toast } from "react-toastify";
import TableData from "../../components/users/TableData";
import Pagination from "../../ui/pagination/Pagination";

const AllUsers = () => {
  const [userList, setUserList] = useState([]);
  const [respUserList, setRespUserList] = useState();
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState();
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageToLoad, SetPageToLoad] = useState(0);
  const allUserTableHeaderList = [
    "UserName",
    "Image",
    "Email ID",
    "Image Like",
    "Favorite",
    "Date & Time",
    "Status",
    "Action",
  ];

  //allUser api call started
  const getAllUsers = async (e) => {
    try {
      let resp = await FetchApi(
        Endpoints.getAllUsers +
          "?skip=" +
          pageToLoad +
          `${dropdown ? "&status=" + dropdown : ""}` +
          `${fromDate ? "&from=" + fromDate : ""}` +
          `${toDate ? "&to=" + toDate : ""}` +
          `${search ? "&name=" + search : ""}`
      );
      if (resp?.status === "success") {
        setUserList(resp?.data);
        setRespUserList(resp);
      }
      if (resp && resp.status === 409) {
        toast.error(resp?.data?.message);
      }
    } catch (e) {
      console.log("registerErr__", JSON.stringify(e.response, null, 4));
    }
  };
  //allUser api call end

  useEffect(() => {
    getAllUsers();
  }, [dropdown, fromDate, toDate, pageToLoad, search]);

  return (
    <div className="p-7 flex flex-col h-full">
      <Header title="All Users" />
      <TableContainer
        leftOneElement={<SearchBar onSearch={setSearch} />}
        right={true}
        rightOneElement={<Dropdown isActive={true} onDropdown={setDropdown} />}
        rightTwoElement={
          <DateGroup onFromDate={setFromDate} onToDate={setToDate} />
        }
      >
        <TableHeader tHeading={allUserTableHeaderList}>
          <TableData getAllUsers={getAllUsers} data={userList} />
        </TableHeader>
      </TableContainer>

      <Pagination
        onPageChange={SetPageToLoad}
        onItemsChanged={setItemsPerPage}
        defaultCount={itemsPerPage}
        totalPages={Math.ceil(respUserList?.total / itemsPerPage)}
      />
    </div>
  );
};

export default AllUsers;
