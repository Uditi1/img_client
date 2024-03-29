import axios from "axios";
// import { Endpoints } from "../Endpoints";
import { toast } from "react-toastify";
import { Endpoints } from "../endpoints";
// import { Cookies } from "react-cookie";

export const FetchApi = (endpoint, data, method='') => {
  function deleteAllCookies() {
    return new Promise((resolve, reject) => {
      let cookies = new Cookies();
      cookies.remove("token", { path: "/" });
      resolve(true);
    });
  }
  document.body.classList.add("custom-loader");
  return new Promise(async (resolve, reject) => {
    const token = localStorage.getItem("token");
    let options = {};
    if(endpoint.includes('updateUserDetail') === false){
      options['Content-Type'] = "application/json"
    }
    if(endpoint.includes('updateUserDetail')){
      options['Content-Type'] = "multipart/form-data"
    }
    if (token) {
      options["AUTHORIZATION"] = `Bearer ${token}`;
    }
    let newData = new FormData();
    if (data) {
      Object.keys(data).forEach((item) => {
        newData.append([item], data[item]);
      });
    }
    let configs = {
      headers: options,
      method: method ? method:(data ? "POST" : "GET"),
      baseURL: Endpoints.baseUrl,
      url: endpoint,
      // data : data ? data: null
    };
    if (data) {
      configs.data = data;
    }
    try {
      let resp = await axios(configs);
      // console.log('checkfetchapi22222______');
      // console.log('checkfetchapi______');
      // console.log('checkapidata___',JSON.stringify(resp,null,4));
      if (resp && resp.data && resp.data.message === "Token is Expired") {
        toast.error("Session Expired! Please login again.");
        deleteAllCookies().then((r) => {
          //initalRender(null)
          //history("/")
        });
      }
      if (resp && resp.data.status === 401) {
        toast.error("Session Expired! Please login again.");
        return;
      }
      if (resp.data.status === 210) {
        if (resp.data.message) {
          toast.error(resp.data.message);
        } else if (resp.data.errors && typeof resp.data.errors === "string") {
          toast.error.Error(resp.data.errors);
        } else if (typeof resp.data.errors === "object") {
         toast.error.Error(resp.data.errors.errorCode);
        }
        // ToastMessage.Error(resp.data.errors);
        document.body.classList.remove("custom-loader");
        reject(resp.data);
        return;
      } else {
        document.body.classList.remove("custom-loader");
        resolve(resp.data);
      }
    } catch (e) {
      if (e.response && e.response.status === 401) {
      }
      if (e.response && e.response.status === 500) {
        toast.error("Server Error. Please Try after Some Time");
      }
      document.body.classList.remove("custom-loader");
      reject(e);
    }
  });
};