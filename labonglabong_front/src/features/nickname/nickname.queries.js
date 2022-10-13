import { useMutation } from "react-query";

import { requestPostRegisterNicknameAPI } from "./nicknameApi";

const useNicknameRegistMutation = ({ data }) => {
  return useMutation(
    () => requestPostRegisterNicknameAPI({ data }),
  );
};

export { useNicknameRegistMutation };
