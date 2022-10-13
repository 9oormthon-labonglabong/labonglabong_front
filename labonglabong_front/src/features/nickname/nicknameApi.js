import { getAPI, postAPI } from "../../utils/axios";

export const requestPostRegisterNicknameAPI = ({ data }) => {
  const url = `/api/acccount`;
  const rs = postAPI({ url, data });
  return rs;
};

export const requestGetNicknameAPI = ({nickname}) => {
  const url = `/api/diary?nickname=${nickname}`;
  const rs = getAPI({ url });
  return rs;
};