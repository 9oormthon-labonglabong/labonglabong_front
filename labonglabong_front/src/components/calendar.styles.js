import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div``;

export const ArrowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SpinnerWrapper = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.table`
  height: 400px;
`;

export const Thead = styled.thead`
  width: 200px;
`;

export const Th = styled.th`
  text-align: center;
  padding: 15px;
`;

export const Td = styled.td`
  position: relative;
  padding: 13px;
  opacity: ${({ isCurrentMonth }) => (isCurrentMonth ? 1 : 0.2)};
  color: ${({ isCurrentDate }) => (isCurrentDate ? "#FFAC35" : "black")};
  text-align: center;
`;

export const Round = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  background-color: #f99239;
  position: absolute;
  // row props에 따라 bottom, left를 다르게 표현해준다.
  bottom: ${({ row }) => (row === 6 ? "13px" : "23px")};
  left: ${({ row }) => (row === 6 ? "17.5px" : "18px")};
`;
