import { useMutation } from "react-query";

import { requestPostRegisterDiaryAPI } from "./diaryApi";

const useDiaryRegistMutation = ({ data }) => {
  return useMutation(
    ["registered_marker", data],
    () => requestPostRegisterDiaryAPI({ data }),
    {
      staleTime: 1000 * 20,
    }
  );
};

export { useDiaryRegistMutation };
