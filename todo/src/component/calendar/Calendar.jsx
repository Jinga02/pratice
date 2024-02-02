import { subMonths } from "date-fns";
import React, { useState } from "react";
import useCalendar from "../../hook/useCalendar";
import style from "./style/Calendar.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Cal = (calProps) => {
  const calendar = useCalendar();
  const [select, setSelect] = useState([]);
  // console.log(calendar);
  return (
    <div className={style.calendarWrapper}>
      <div className="flex justify-between min-w-[calc(100%/7)] items-center text-center">
        <button
          onClick={() => {
            calendar.setCurrentDate(subMonths(calendar.currentDate, 1));
          }}
        >
          <FaArrowLeftLong />{" "}
        </button>
        <span>{`${calendar.currentDate.getFullYear()}년
        ${calendar.currentDate.getMonth() + 1}월`}</span>
        <button
          onClick={() => {
            calendar.setCurrentDate(subMonths(calendar.currentDate, -1));
          }}
        >
          <FaArrowRight />
        </button>
      </div>
      <div>
        {calendar.weekCalendarList.map((item) => (
          <div className=" flex px-20 w-full" key={Math.random()}>
            {item.map((day) => (
              <button
                onClick={() => {
                  const findItem = select.find((item) => item === day);
                  if (findItem) {
                    setSelect((state) => state.filter((item) => item !== day));
                  } else {
                    setSelect((state) => [...state, day]);
                  }
                }}
                className={`flex justify-between min-w-[calc(100%/7)] active:bg-blue-500 hover:bg-blue-400 p-1 items-center text-center ${
                  day === 0 ? " invisible" : ""
                }
                  ${select.find((item) => item === day) ? " bg-blue-600" : ""}
                  `}
                key={Math.random()}
              >
                <div className=" mx-auto">{day}</div>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cal;
