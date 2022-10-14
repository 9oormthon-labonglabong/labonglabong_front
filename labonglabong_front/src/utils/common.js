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
  if (size <= 60) {
    return { width: 21, height: 23 };
  } else if (size <= 120) {
    return { width: 32, height: 35 };
  } else if (size <= 180) {
    return { width: 43, height: 47 };
  } else if (size <= 240) {
    return { width: 54, height: 59 };
  } else {
    return { width: 67, height: 85 };
  }
};

export const checkLayoutSize = (size) => {
  if (size <= 60) {
    return { xAnchor: -0.2, yAnchor: 1.3 };
  } else if (size <= 120) {
    return { xAnchor: -0.4, yAnchor: 1.5 };
  } else if (size <= 180) {
    return { xAnchor: -0.6, yAnchor: 2 };
  } else if (size <= 240) {
    return { xAnchor: -0.8, yAnchor: 2.4 };
  } else {
    return { xAnchor: -0.9, yAnchor: 3.4 };
  }
};
