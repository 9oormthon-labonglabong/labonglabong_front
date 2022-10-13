import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div``;

export const ArrowWrapper = styled.div`
  width: 200px;
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
  /* max-width: 400px; */
  height: 400px;
`;

export const Thead = styled.thead`
  width: 200px;
`;

export const Th = styled.th`
  text-align: center;
  padding: 20px;
`;

export const Td = styled.td`
  position: relative;
  padding: 18px;
  opacity: ${({ isCurrentMonth }) => (isCurrentMonth ? 1 : 0.2)};
  color: ${({ isCurrentDate }) => (isCurrentDate ? "red" : "black")};
  text-align: center;
`;

export const Round = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
  background-color: #f99239;
  position: absolute;
  bottom: 5px;
  left: 23px;
`;
