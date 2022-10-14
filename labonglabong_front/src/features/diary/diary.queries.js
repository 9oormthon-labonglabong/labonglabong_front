import { useQuery, useMutation } from "react-query";

import {
  requestGetRegisteredDiaryDataAPI,
  requestPostRegisterDiaryAPI,
} from "./diaryApi";

const useRegisteredDiaryData = ({ diaryId }) => {
  return useQuery(
    ["registered_diary", diaryId],
    () =>
      requestGetRegisteredDiaryDataAPI({
        diaryId,
      }),
    {
      enabled: false,
      staleTime: 1000 * 30,
    }
  );
};

const useDiaryRegistMutation = ({ data, options }) => {
  return useMutation(
    ["registered_marker", data],
    () => requestPostRegisterDiaryAPI({ data }),
    {
      staleTime: 1000 * 20,
      ...options,
    }
  );
};

export { useRegisteredDiaryData, useDiaryRegistMutation };
