import axios from "axios";

const defaultClient = axios.create({
  baseURL: process.env.REACT_APP_API || "http://172.20.10.3:8080",
});

export const getAPI = async ({ url, params }) => {
  try {
    const response = await defaultClient({
      method: "get",
      url,
      params,
    });

    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
