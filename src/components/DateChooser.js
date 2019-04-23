import React from "react";

const styledDateChooser = props => {
  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      {props.children}
    </div>
  );
};

export default styledDateChooser;
