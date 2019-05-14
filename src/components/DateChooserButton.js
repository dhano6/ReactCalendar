import React from "react";

const DateChooserButton = props => {
  return (
    <button
      onClick={props.onClick}
      style={{
        color: "#222741",
        flex: "1",
        padding: "15px",
        background: "none",
        cursor: "pointer",
        border: "none",
        fontSize: "20px",
        fontWeight: "700",
        outline: "none",
        borderBottom: props.isChoosing
          ? "2px solid #222741"
          : "2px solid transparent"
      }}
    >
      {props.dateType === "start" ? "Start Date" : "End Date"}
      <span style={{ display: "block", fontSize: "50px" }}>
        {props.dateType === "start" ? props.startDate : props.endDate}
      </span>
    </button>
  );
};

export default DateChooserButton;
