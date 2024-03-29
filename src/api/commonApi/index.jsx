import axios from "axios";
import {toast} from 'react-toastify'
import { Endpoints } from "../endpoints";

export const CommonAPi = (endpoint, data, option = false) => {
    return new Promise(async (resolve, reject) => {
      let options = {
        "content-type": "mutlipart/form-data",
      };
      try {
        let resp = await axios({
          headers: option ? option : options,
          baseURL: Endpoints.baseUrl,
          url: endpoint,
          data: data ? data : null,
          method: data ? "POST" : "GET",
        });
        if (resp && resp.data.status == 401) {
          toast.error("Session Expired! Please login again.");
          return;
        }
        if (resp.data.status == 210) {
          if (resp.data.message) {
            toast.error(resp.data.message);
          } else if (resp.data.errors && typeof resp.data.errors == "string") {
            toast.error(resp.data.errors);
          } else if (typeof resp.data.errors == "object") {
            toast.error(resp.data.errors.errorCode);
          }
          reject(resp.data);
          return;
        } else {
          // console.log('step2')
          resolve(resp.data);
        }
      } catch (e) {
        if (e.response && e.response.status == 401) {
        }
        reject(e);
      }
    });
  };