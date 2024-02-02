import { getDaysInMonth, subMonths } from "date-fns";
import React, { useState } from "react";

// JavaScript Date 객체에서 월 값을 수정하기 위한 고정값 (월은 0부터 시작함)
const DATE_MONTH_FIXER = 1;

// 캘린더의 길이로, 35일로 고정됩니다.
const CALENDER_LENGTH = 35;

// 캘린더에서 빈 날짜의 기본 값입니다.
const DEFAULT_TRASH_VALUE = 0;

// 일주일의 일 수입니다.
const DAY_OF_WEEK = 7;

// 한국어로 된 요일 목록입니다.
const DAY_LIST = ["일", "월", "화", "수", "목", "금", "토"];

// 캘린더 로직을 관리하기 위한 사용자 정의 React 훅입니다.
const useCalendar = () => {
  // 현재 날짜를 담는 상태 변수입니다.
  const [currentDate, setCurrentDate] = useState(new Date());

  // 현재 월의 총 날짜 수를 구합니다.
  const totalMonthDays = getDaysInMonth(currentDate);

  // 캘린더에서 이전 빈 날짜들을 위한 배열을 생성합니다.
  const prevDayList = Array.from({
    length: Math.max(0, currentDate.getDay() - 1),
  }).map(() => DEFAULT_TRASH_VALUE);

  // 현재 월의 날짜들을 위한 배열을 생성합니다.
  const currentDayList = Array.from({ length: totalMonthDays }).map(
    (_, i) => i + 1
  );

  // 캘린더에서 다음 빈 날짜들을 위한 배열을 생성합니다.
  const nextDayList = Array.from({
    length: CALENDER_LENGTH - currentDayList.length - prevDayList.length,
  }).map(() => DEFAULT_TRASH_VALUE);

  // 이전, 현재, 다음 날짜들을 결합하여 완전한 캘린더를 생성합니다.
  const currentCalendarList = prevDayList.concat(currentDayList, nextDayList);

  // 캘린더 날짜들을 주 단위로 그룹화합니다.
  const weekCalendarList = currentCalendarList.reduce((acc, cur, idx) => {
    const chunkIndex = Math.floor(idx / DAY_OF_WEEK);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(cur);
    return acc;
  }, []);

  // 주 단위 캘린더, 현재 날짜, 현재 날짜를 설정하는 함수를 반환합니다.
  return {
    weekCalendarList: weekCalendarList,
    currentDate: currentDate,
    setCurrentDate: setCurrentDate,
  };
};

export default useCalendar;
