import { useMutation } from "react-query";

import { requestPostRegisterNicknameAPI } from "./nicknameApi";

const useNicknameRegistMutation = ({ data, options }) => {
  return useMutation(() => requestPostRegisterNicknameAPI({ nickname: data }), {
    ...options,
  });
};

export { useNicknameRegistMutation };
