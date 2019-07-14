import React from "react";

const Imagen = props => {
  let content;
  if (props.isUrl) {
    content = (
      <img
        src={props.url}
        style={{
          width: props.width ? "100%" : "auto",
          height: props.height ? "100%" : "auto"
        }}
        alt={props.alt}
      />
    );
  } else {
    const path = require("assets/img/" + props.url);
    content = (
      <img
        src={path}
        style={{
          width: props.width ? "100%" : "auto",
          height: props.height ? "100%" : "auto"
        }}
        alt={props.alt}
      />
    );
  }
  return (
    <div style={{ width: props.width, height: props.height }}>{content}</div>
  );
};

export default Imagen;
