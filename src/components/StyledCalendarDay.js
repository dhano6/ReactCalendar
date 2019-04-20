import React from "react";

const styledCalendarDay = props => {
  const bg = () => {
    if (props.isEnd) return "#f7c99b";
    if (props.isSelected) return "red";
    if (props.isInBetween) return "red";
    return "none";
  };
  const back = bg();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "15px",
        color: "#444",
        transition: "0.3s ease background",
        border: "none",
        cursor: "pointer",
        background: { back }
      }}
      className="calendarButton"
    >
      {props.children}
    </div>
  );
};

export default styledCalendarDay;
