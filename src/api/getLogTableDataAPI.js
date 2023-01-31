import { parseLogsAPI } from "./apis";
import axios from "axios";

export const getLogTableDataAPI = (file) =>
  new Promise((resolve, reject) => {
    const form = new FormData();
    form.append("logs", file);
    const options = {
      method: "POST",
      url: parseLogsAPI,
      data: form,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        resolve(response.data);
      })
      .catch(function (error) {
        console.error(error);
        reject(error.response?.data || { message: error?.message });
      });
  });
