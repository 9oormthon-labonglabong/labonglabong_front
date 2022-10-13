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

const Calendar = ({ onClick }) => {
  // recoil state를 바라봐야함
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
        <ChevronLeftIcon
          style={{ width: "25px", height: "25px" }}
          onClick={navigation.toPrev}
        />
        <S.Title>{format(cursorDate, "yyyy. MM")}</S.Title>
        <ChevronRightIcon
          style={{ width: "25px", height: "25px" }}
          onClick={navigation.toNext}
        />
      </S.ArrowWrapper>

      {isFetching ? (
        <S.SpinnerWrapper>
          <Spinner color={"warning"} />
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
                        {format(value, "yyyy-MM") === selectedMonth &&
                          RegisteredDays?.days?.includes(getDate(value)) && (
                            <S.Round row={body?.value?.length} />
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
