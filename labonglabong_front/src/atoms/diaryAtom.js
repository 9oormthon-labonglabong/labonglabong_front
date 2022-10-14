import { atom } from "recoil";

export const INITIAL_STATE = {
  time: "00:00",
  emotion: null,
  text: "",
  latitude: "",
  longitude: "",
  address: "",
  title: "",
  paths: "",
};

export const diaryAtom = atom({
  key: "diaryAtom",
  default: {
    time: "00:00",
    emotion: null,
    text: "",
    latitude: "",
    longitude: "",
    address: "",
    title: "",
    paths: "",
  },
});
