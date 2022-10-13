import React from "react";
import styled from "styled-components";

const Svg = ({
  icon,
  color,
  width = "20",
  height = "20",
  viewBox,
  ref,
  onClick,
}) => {
  const defaultViewBox = `0 0 ${width} ${height}`;

  return (
    <SvgWrap
      onClick={onClick}
      width={width}
      height={height}
      viewBox={viewBox ?? defaultViewBox}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      ref={ref}
    >
      <path d={icon} fill={color} />
    </SvgWrap>
  );
};

export default Svg;

const SvgWrap = styled.svg`
  transition: 0.4s;
`;
