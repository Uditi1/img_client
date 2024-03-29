import React, { useEffect, useState } from "react";
import Header from "../../ui/header/Header";
import DashboardBoxContainer from "../../components/dashboard/DashboardBoxContainer";
import TableContainer from "../../ui/tableElements/TableContainer";
import SearchBar from "../../ui/searchBar/SearchBar";
import Dropdown from "../../ui/dropdown/Dropdown";
import TableHeader from "../../ui/tableElements/TableHeader";
import DateGroup from "../../utils/groups/DateGroup";
import TableData from "../../components/users/TableData";
import { FetchApi } from "../../api/fetchApi";
import { Endpoints } from "../../api/endpoints";
import { toast } from "react-toastify";
import Pagination from "../../ui/pagination/Pagination";

const Dashboard = () => {
  const [userList, setUserList] = useState([]);
  const [respUserList, setRespUserList] = useState();
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState();
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageToLoad, SetPageToLoad] = useState(0);
  const dashboardTablehHeaderList = [
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
      <DashboardBoxContainer />

      <div className="flex flex-col pt-5">
        <Header title="New Users" />

        <TableContainer
          leftOneElement={<SearchBar onSearch={setSearch} />}
          rightOneElement={
            <Dropdown isActive={true} onDropdown={setDropdown} />
          }
          right={true}
          rightTwoElement={
            <DateGroup onFromDate={setFromDate} onToDate={setToDate} />
          }
        >
          <TableHeader tHeading={dashboardTablehHeaderList}>
            <TableData getAllUsers={getAllUsers} data={userList} />
          </TableHeader>
        </TableContainer>
      </div>
      <Pagination
        onPageChange={SetPageToLoad}
        onItemsChanged={setItemsPerPage}
        defaultCount={itemsPerPage}
        totalPages={Math.ceil(respUserList?.total / itemsPerPage)}
      />
    </div>
  );
};

export default Dashboard;
