import axios from "axios";

const apiBaseURL = 'https://api.bitpin.ir/v1';

export const httpService = axios.create({
  baseURL: apiBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.request.use(async (config: any) => {
  return config;
});

httpService.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    console.log(error);

    return Promise.reject(error);
  }
);
