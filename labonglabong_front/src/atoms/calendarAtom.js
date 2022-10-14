import { atom } from "recoil";

// import { format } from "date-fns";
import dayjs from "dayjs";

export const calendarAtom = atom({
  key: "calendarAtom",
  default: {
    nickname: "",
    selectedDate: dayjs(new Date()).format("YYYY.MM.DD"),
  },
});
