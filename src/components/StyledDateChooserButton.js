import React from "react";

const styledDateChooserButton = props => {
  return (
    <button
      onClick={props.onClick}
      style={{
        color: "#fff",
        flex: "1",
        padding: "15px",
        background: "none",
        cursor: "pointer",
        border: "none",
        borderBottom: props.isChoosing ? "2px solid #fff" : "none"
      }}
    >
      {props.children}
    </button>
  );
};

export default styledDateChooserButton;
