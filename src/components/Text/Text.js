import React from "react";

const Text = props => {
  return (
    <p
      style={{
        fontWeight: props.weight ? "700" : "400",
        fontSize: props.size,
        letterSpacing: props.spacing
      }}
    >
      {props.children}
    </p>
  );
};

export default Text;
