import { atom } from "recoil";

export const diaryAtom = atom({
  key: "diaryAtom",
  default: {
    time: "00:00",
    emotion: null,
    text: "",
    date: "2022-10-14",
    latitude: "33.43",
    longitude: "126.87",
    address: "",
    title: "",
  },
});
