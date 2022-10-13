import labong_smile from "../assets/labong_smile.png";
import labong_soso from "../assets/labong_soso.png";
import labong_angry from "../assets/labong_angry.png";
import labong_lovely from "../assets/labong_lovely.png";
import labong_sad from "../assets/labong_sad.png";

export const LABONG_ARRAY = [
  labong_smile,
  labong_soso,
  labong_angry,
  labong_lovely,
  labong_sad,
];

export const checkCommentSize = (size) => {
  if (size <= 10) {
    return { width: 21, height: 23 };
  } else if (size <= 20) {
    return { width: 32, height: 35 };
  } else if (size <= 30) {
    return { width: 43, height: 47 };
  } else if (size <= 40) {
    return { width: 54, height: 59 };
  } else {
    return { width: 67, height: 85 };
  }
};
