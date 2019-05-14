import React from "react";

const Calendar = props => {
  return (
    <div
      style={{
        maxWidth: "411px",
        borderRadius: "10px",
        display: "grid",
        gridTemplateColumns: "repeat(7, 53px)",
        background: "#fff",
        boxShadow: "5px 5px 20px #ccc",
        padding: "20px"
      }}
    >
      {props.children}
    </div>
  );
};

export default Calendar;
