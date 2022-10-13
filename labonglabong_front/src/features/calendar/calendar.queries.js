import { useQuery } from "react-query";

import { requestGetRegisteredDayAPI } from "./calendarApi";

const useRegisteredDay = ({ date, nickname }) => {
  return useQuery(
    ["registered_day", date, nickname],
    () => requestGetRegisteredDayAPI({ date, nickname }),
    {
      staleTime: 1000 * 20,
    }
  );
};

export { useRegisteredDay };
