import { getAPI } from "../../utils/axios";

export const requestGetRegisteredMarkerAPI = ({ nickname }) => {
  const url = `/api/diary?nickname=${nickname}`;
  const rs = getAPI({ url });
  return rs;
};
