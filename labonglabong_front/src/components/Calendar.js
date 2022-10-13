import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { useCalendar } from "@h6s/calendar";
import { getDate, format } from "date-fns";
import { ko } from "date-fns/locale";

import { ChevronRightIcon, ChevronLeftIcon } from "@goorm-dev/gds-goormthon";

function App() {
  const { cursorDate, navigation, headers, body, view } = useCalendar();

  const handleDateClick = (date) => {
    console.log("date", date);
  };

  return (
    <Layout>
      <Title>{format(cursorDate, "yyyy. MM")}</Title>
      <ArrowWrapper>
        <ChevronLeftIcon onClick={navigation.toPrev}>좌</ChevronLeftIcon>
        <div onClick={navigation.setToday}>오늘</div>
        <ChevronRightIcon onClick={navigation.toNext}>우</ChevronRightIcon>
      </ArrowWrapper>
      <Table>
        <Thead>
          <tr>
            {headers.weekDays.map(({ key, value }) => {
              return <Th key={key}>{format(value, "E", { locale: ko })}</Th>;
            })}
          </tr>
        </Thead>
        <tbody>
          {body.value.map(({ key, value: days }) => (
            <tr key={key}>
              {days.map(({ key, value, isCurrentDate, isCurrentMonth }) => {
                return (
                  <>
                    <Td
                      key={key}
                      isCurrentMonth={isCurrentMonth}
                      isCurrentDate={isCurrentDate}
                      onClick={() =>
                        handleDateClick(format(value, "yyyy-MM-dd"))
                      }
                    >
                      {getDate(value)}
                      {/* server에서 받아온 date list중 해당 값과 동일한 값이 있다면 보여준다. */}
                      {getDate(value) % 2 === 0 && <Round />}
                    </Td>
                  </>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div``;

const ArrowWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Table = styled.table``;

const Thead = styled.thead`
  width: 200px;
`;

const Th = styled.th`
  text-align: center;
  padding: 20px;
`;

const Td = styled.td`
  position: relative;
  opacity: ${({ isCurrentMonth }) => (isCurrentMonth ? 1 : 0.2)};
  color: ${({ isCurrentDate }) => (isCurrentDate ? "red" : "black")};
  text-align: center;
  padding: 20px;
`;

const Round = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: red;
  position: absolute;
  left: 23.5px;
`;
