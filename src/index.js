import React, { useState } from "react";
import ReactDOM from "react-dom";
import StyledDateChooser from "./components/StyledDateChooser";
import StyledDateChooserButton from "./components/StyledDateChooserButton";
import StyledCalendar from "./components/StyledCalendar";
import StyledCalendarDay from "./components/StyledCalendarDay";
import "./styles.css";

const App = () => {
  const [dateType, setDateType] = useState("start"); // start/end
  const [startDate, setStartDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
      <StyledDateChooser>
        <StyledDateChooserButton
          onClick={() => setDateType("start")}
          isChoosing={dateType === "start"}
        >
          Start Date
          <span style={{ display: "block", fontSize: "50px" }}>
            {startDate}
          </span>
        </StyledDateChooserButton>
        <StyledDateChooserButton
          onClick={() => setDateType("end")}
          isChoosing={dateType === "end"}
        >
          End Date
          <span style={{ display: "block", fontSize: "50px" }}>{endDate}</span>
        </StyledDateChooserButton>
      </StyledDateChooser>

      <StyledCalendar>
        {calendarDates.map((day, index) => {
          const realDayNumber = index + 1;
          let isSelected = false;
          let isInBetween = checkInBetween(realDayNumber);
          if (realDayNumber === startDate) isSelected = true; // start
          if (realDayNumber === endDate) isSelected = true; // end

          return (
            <StyledCalendarDay
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
            </StyledCalendarDay>
          );
        })}
      </StyledCalendar>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
