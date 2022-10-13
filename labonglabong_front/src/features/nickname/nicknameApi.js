import { getAPI, postAPI } from "../../utils/axios";

export const requestPostRegisterNicknameAPI = ({ data }) => {
  const url = `/api/acccount`;
  const rs = postAPI({ url, data });
  return rs;
};
