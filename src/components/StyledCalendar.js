import React from "react";

const styledCalendar = props => {
  return (
    <div
      style={{
        maxWidth: "400px",
        border: "1px solid black",
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        background: "#fff"
      }}
    >
      {props.children}
    </div>
  );
};

export default styledCalendar;
