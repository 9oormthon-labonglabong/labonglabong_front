import { useQuery } from "react-query";

import {
  requestGetRegisteredDiaryAPI,
  requestGetRegisteredDayAPI,
} from "./calendarApi";

import dayjs from "dayjs";

const useRegisteredDiary = ({ date, nickname }) => {
  return useQuery(
    ["registered_diary", date, nickname],
    () =>
      requestGetRegisteredDiaryAPI({
        date: dayjs(date).format("YYYY-MM-DD"),
        nickname,
      }),
    {
      enabled: false,
      staleTime: 1000 * 30,
    }
  );
};

const useRegisteredDay = ({ date, nickname }) => {
  return useQuery(
    ["registered_day", date, nickname],
    () =>
      requestGetRegisteredDayAPI({
        date: dayjs(date).format("YYYY-MM-DD"),
        nickname,
      }),
    {
      staleTime: 1000 * 30,
    }
  );
};

export { useRegisteredDiary, useRegisteredDay };
