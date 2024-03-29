import React, { useEffect, useState } from 'react'
import Header from '../../ui/header/Header'
import TableContainer from '../../ui/tableElements/TableContainer'
import TableHeader from '../../ui/tableElements/TableHeader'
import DateGroup from '../../utils/groups/DateGroup'
import { Endpoints } from '../../api/endpoints'
import { FetchApi } from '../../api/fetchApi'
import { toast } from 'react-toastify'
import GuestTableData from '../../components/users/GuestTableData'

const GuestUsers = () => {

  const [guestList, setGuestList] = useState({});
  const { guests } = guestList || {};
  const guestUserTableHeaderList = ["Guest User ID", "Date & Time"]

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
    getGuestUser();
  }, []);

  return (
    <div className="p-7 flex flex-col h-full">
      <Header title="Guest Users" />
      <TableContainer >
      <TableHeader tHeading={guestUserTableHeaderList}>
        <GuestTableData data={guests} />
      </TableHeader>
      </TableContainer>
    </div>
  )
}

export default GuestUsers