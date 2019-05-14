import React, { useState } from "react";
import ReactDOM from "react-dom";
import DateChooser from "./components/DateChooser";
import DateChooserButton from "./components/DateChooserButton";
import Calendar from "./components/Calendar";
import CalendarDay from "./components/CalendarDay";
import "./styles.css";

const App = () => {
  const [dateType, setDateType] = useState("start"); // start/end
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);

  const calendarDates = Array(31)
    .fill(0)
    .map((e, i) => i);

  const updateDate = day => {
    if (dateType === "start") {
      if (endDate && day > endDate) {
        setStartDate(day);
        setEndDate(null);
        setDateType("end");
        return;
      }
      setStartDate(day);
      setDateType("end");
      return;
    }
    if (dateType === "end") {
      if (startDate && day < startDate) {
        setStartDate(day);
        setDateType("end");
        return;
      }
      setEndDate(day);
      return;
    }
  };

  const handleHover = day => {
    if (!startDate || endDate) return;
    setHoverDate(day);
  };

  const checkInBetween = day => {
    if (!endDate) return day > startDate && day < hoverDate;
    if (startDate) return day > startDate && day < endDate;
  };

  return (
    <div className="App">
      <DateChooser>
        <DateChooserButton
          onClick={() => setDateType("start")}
          isChoosing={dateType === "start"}
          dateType={"start"}
          startDate={startDate}
        />
        <DateChooserButton
          onClick={() => setDateType("end")}
          isChoosing={dateType === "end"}
          dateType={"end"}
          endDate={endDate}
        />
      </DateChooser>
      <Calendar>
        {calendarDates.map(day => {
          // day was created from index e.g. starting from 0
          const realDayNumber = day + 1;
          let isSelected = false;
          let isInBetween = checkInBetween(realDayNumber);
          if (realDayNumber === startDate) isSelected = true; // start
          if (realDayNumber === endDate) isSelected = true; // end

          return (
            <CalendarDay
              key={day}
              isStartOrEndSelected={isSelected}
              isStartSelected={startDate}
              isEndSelected={endDate}
              isInBetween={isInBetween}
              isStart={startDate === realDayNumber}
              isEnd={endDate === realDayNumber}
              startEndAreEqual={startDate === endDate}
              onClick={() => updateDate(realDayNumber)}
              onMouseEnter={() => {
                if (endDate) return;
                handleHover(realDayNumber);
              }}
            >
              {realDayNumber}
            </CalendarDay>
          );
        })}
      </Calendar>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
