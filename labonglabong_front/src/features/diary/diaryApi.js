import { getAPI, postAPI } from "../../utils/axios";

export const requestGetRegisteredDiaryDataAPI = ({ diaryId }) => {
  const url = `/api/diary/${diaryId}`;
  const rs = getAPI({ url });
  return rs;
};

export const requestPostRegisterDiaryAPI = ({ data }) => {
  const url = `/api/diary`;
  const rs = postAPI({ url, data });
  return rs;
};
