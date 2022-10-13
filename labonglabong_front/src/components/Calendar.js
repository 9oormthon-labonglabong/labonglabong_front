import React, { useState, useEffect } from "react";

import * as S from "./calendar.styles";

import { useCalendar } from "@h6s/calendar";
import { getDate, format } from "date-fns";
import { ko } from "date-fns/locale";

import {
  ChevronRightIcon,
  ChevronLeftIcon,
  Spinner,
} from "@goorm-dev/gds-goormthon";

import { useRegisteredDay } from "../features/calendar/calendar.queries";

// onClick할 경우의 event를 주입받는 방식으로 진행한다.
const Calendar = ({ onClick }) => {
  const [selectedMonth, setSelectedMonth] = useState(
    format(new Date(), "yyyy-MM")
  );
  const { cursorDate, navigation, headers, body } = useCalendar();

  const { data: RegisteredDays, isFetching } = useRegisteredDay({
    date: selectedMonth,
    nickname: "aa", // 가변요소 적용 필요
  });

  useEffect(() => {
    setSelectedMonth(format(cursorDate, "yyyy-MM"));
  }, [cursorDate]);

  return (
    <S.Layout>
      <S.ArrowWrapper>
        <ChevronLeftIcon onClick={navigation.toPrev} />
        <S.Title>{format(cursorDate, "yyyy. MM")}</S.Title>
        <ChevronRightIcon onClick={navigation.toNext} />
      </S.ArrowWrapper>

      {isFetching ? (
        <S.SpinnerWrapper>
          <Spinner />
        </S.SpinnerWrapper>
      ) : (
        <S.Table>
          <S.Thead>
            <tr>
              {headers.weekDays.map(({ key, value }) => {
                return (
                  <S.Th key={key}>{format(value, "E", { locale: ko })}</S.Th>
                );
              })}
            </tr>
          </S.Thead>
          <tbody>
            {body.value.map(({ key, value: days }) => (
              <tr key={key}>
                {days.map(({ key, value, isCurrentDate, isCurrentMonth }) => {
                  return (
                    <>
                      <S.Td
                        key={key}
                        isCurrentMonth={isCurrentMonth}
                        isCurrentDate={isCurrentDate}
                        onClick={() => onClick(format(value, "yyyy-MM-dd"))}
                      >
                        {getDate(value)}
                        {/* 현재 search한 month와 동일하고 response로 받아온 days중 있다면 Round를 보여준다. */}
                        {format(value, "yyyy-MM") === selectedMonth &&
                          RegisteredDays?.days?.includes(getDate(value)) && (
                            <S.Round />
                          )}
                      </S.Td>
                    </>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </S.Table>
      )}
    </S.Layout>
  );
};

export default Calendar;
