import { getAPI, postAPI } from "../../utils/axios";

export const requestPostRegisterNicknameAPI = ({ nickname }) => {
  console.log("nickname", nickname);
  const url = `/api/account`;
  const rs = postAPI({ url, data: { nickname } });
  return rs;
};

export const requestGetNicknameAPI = ({ nickname }) => {
  const url = `/api/diary?nickname=${nickname}`;
  const rs = getAPI({ url });
  return rs;
};
