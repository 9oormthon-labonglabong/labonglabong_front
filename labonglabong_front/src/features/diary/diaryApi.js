import { getAPI, postAPI } from "../../utils/axios";

export const requestPostRegisterDiaryAPI = ({ data }) => {
  const url = `/api/diary`;
  const rs = postAPI({ url, data });
  return rs;
};
