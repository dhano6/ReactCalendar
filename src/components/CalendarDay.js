import React from "react";

const CalendarDay = props => {
  const background = () => {
    if (props.isStartOrEndSelected) return "rgb(50, 208, 236)";
    if (props.isInBetween) return "#66DCEC";
    return "none";
  };

  const radius = () => {
    if (props.isEnd && props.isStartSelected && !props.startEndAreEqual)
      return "0 50% 50% 0";
    if (props.isStart && props.isEndSelected && !props.startEndAreEqual)
      return "50% 0 0 50%";
    if (props.isStartOrEndSelected) return "50%";
    if (props.isInBetween) return "0";
    return "50%";
  };

  const color = () => {
    if (props.isEnd) return "#fff";
    if (props.isStartOrEndSelected) return "#fff";
    if (props.isInBetween) return "#fff";
    return "#444";
  };

  const shadow = () => {
    if (props.isEnd && props.isStartSelected && !props.startEndAreEqual)
      return "2px 2px 2px rgba(0, 0, 0, 0.1)";
    if (props.isStart && props.isEndSelected && !props.startEndAreEqual)
      return "2px 2px 2px rgba(0, 0, 0, 0.1)";
    if (props.isEnd) return "0px 2px 2px rgba(0, 0, 0, 0.1)";
    if (props.isStart) return "0px 2px 2px rgba(0, 0, 0, 0.1)";
    if (props.isInBetween) return "2px 2px 2px rgba(0, 0, 0, 0.1)";
    return "none";
  };

  const border = () => {
    if (props.isEnd && !props.isStartSelected) return "2px solid transparent";
    if (props.isStart && !props.isEndSelected) return "2px solid transparent";
    return "2px solid transparent";
  };

  const borderL = () => {
    if (props.isEnd && props.isStartSelected && !props.startEndAreEqual)
      return "none";
    if (props.isInBetween) return "none";
    return "2px solid rgb(254, 254, 254)";
  };

  const borderR = () => {
    if (props.isStart && props.isEndSelected && !props.startEndAreEqual)
      return "none";
    if (props.isInBetween) return "none";
    return "2px solid rgb(254, 254, 254)";
  };

  const margin = () => {
    if (props.isInBetween) return "0 0 5px 0";
    if (props.isStart && props.isEndSelected && !props.startEndAreEqual)
      return "0 0 5px 0";
    return "0 5px 5px 0";
  };

  const styles = {
    margin: margin(),
    border: border(),
    borderLeft: borderL(),
    borderRight: borderR(),
    color: color(),
    boxShadow: shadow(),
    borderRadius: radius(),
    background: background(),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px",
    fontSize: "14px",
    fontWeight: "700",
    transition: "0.5s ease background",
    cursor: "pointer",
    borderColor: "#FEFEFE"
  };

  return (
    <div style={styles} className="calendarDay" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default CalendarDay;
