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
      if (endDate && day > endDate) return;
      setStartDate(day);
      setDateType("end");
      return;
    }
    setEndDate(day);
  };

  const handleHover = day => {
    if (!startDate || endDate) return;
    setHoverDate(day);
  };

  const checkInBetween = day => {
    if (!endDate) return day > startDate && day < hoverDate;
    return day > startDate && day < endDate;
  };

  return (
    <div className="App">
      <DateChooser>
        <DateChooserButton
          onClick={() => setDateType("start")}
          isChoosing={dateType === "start"}
        >
          Start Date
          <span style={{ display: "block", fontSize: "50px" }}>
            {startDate}
          </span>
        </DateChooserButton>
        <DateChooserButton
          onClick={() => setDateType("end")}
          isChoosing={dateType === "end"}
        >
          End Date
          <span style={{ display: "block", fontSize: "50px" }}>{endDate}</span>
        </DateChooserButton>
      </DateChooser>

      <Calendar>
        {calendarDates.map((day, index) => {
          const realDayNumber = index + 1;
          let isSelected = false;
          let isInBetween = checkInBetween(realDayNumber);
          if (realDayNumber === startDate) isSelected = true; // start
          if (realDayNumber === endDate) isSelected = true; // end

          return (
            <CalendarDay
              key={index}
              isSelected={isSelected}
              isInBetween={isInBetween}
              isEnd={endDate === realDayNumber}
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
