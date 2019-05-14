import React from "react";

const dateChooser = props => {
  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      {props.children}
    </div>
  );
};

export default dateChooser;
