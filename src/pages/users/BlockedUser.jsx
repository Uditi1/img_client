import React, { useEffect, useState } from "react";
import Header from "../../ui/header/Header";
import TableContainer from "../../ui/tableElements/TableContainer";
import SearchBar from "../../ui/searchBar/SearchBar";
import TableHeader from "../../ui/tableElements/TableHeader";
import DateGroup from "../../utils/groups/DateGroup";
import { Endpoints } from "../../api/endpoints";
import { toast } from "react-toastify";
import { FetchApi } from "../../api/fetchApi";
import BlockTableData from "../../components/users/BlockTableData";
import Pagination from "../../ui/pagination/Pagination";

const BlockedUser = () => {
  const [blockUserList, setBlockUserList] = useState([]);
  const [respBlockUserList, setRespBlockUserList] = useState()
  const [fromDate, setFromDate] = useState(null);
  const [search, setSearch] = useState("");
  const [toDate, setToDate] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageToLoad, SetPageToLoad] = useState(0);
  const blockedUserHeaderList = [
    "UserName",
    "Image",
    "Email ID",
    "Image Share",
    "Favorite",
    "Date & Time",
    "Blocked Date & Time",
    "Action",
  ];

  //blockUser api call started
  const getAllBlockUsers = async (e) => {
    try {
      let resp = await FetchApi(
        Endpoints.getAllUsers +
          "?status=false" +
          "&skip=" + pageToLoad +
          `${fromDate ? "&from=" + fromDate : ""}` +
          `${toDate ? "&to=" + toDate : ""}` +
          `${search ? "&name=" + search : ""}`
      );
      if (resp?.status === "success") {
        setBlockUserList(resp?.data);
        setRespBlockUserList(resp)
      }
      if (resp && resp.status === 409) {
        toast.error(resp?.data?.message);
      }
    } catch (e) {
      console.log("registerErr__", JSON.stringify(e.response, null, 4));
    }
  };
  //blockUser api call end

  useEffect(() => {
    getAllBlockUsers();
  }, [fromDate, toDate, pageToLoad, search]);

  return (
    <div className="p-7 flex flex-col h-full">
      <Header title="Blocked Users" />
      <TableContainer
        leftOneElement={<SearchBar onSearch={setSearch} />}
        rightOneElement={
          <DateGroup onFromDate={setFromDate} onToDate={setToDate} />
        }
      >
        <TableHeader tHeading={blockedUserHeaderList}>
          <BlockTableData
            getAllBlockUsers={getAllBlockUsers}
            data={blockUserList}
          />
        </TableHeader>
      </TableContainer>

      <Pagination
        onPageChange={SetPageToLoad}
        onItemsChanged={setItemsPerPage}
        defaultCount={itemsPerPage}
        totalPages={Math.ceil(respBlockUserList?.total / itemsPerPage)}
      />
    </div>
  );
};

export default BlockedUser;
