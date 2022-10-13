import { getAPI } from "../../utils/axios";

export const requestGetRegisteredDayAPI = ({ date, nickname }) => {
  const url = `/api/diary/month?date=${date}&nickname=${nickname}`;
  const rs = getAPI({ url });
  return rs;
};
