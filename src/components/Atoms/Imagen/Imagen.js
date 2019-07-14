import React from "react";

const Imagen = props => {
  let content;

  // url
  if (props.isUrl) {
    if (props.isBackground) {
      content = (
        <div
          style={{
            background: "url('" + props.url + "')",
            width: props.width,
            height: props.height,
            borderRadius: props.borderRadius
          }}
        >
          {props.children}
        </div>
      );
    } else {
      content = (
        <div style={{ width: props.width, height: props.height }}>
          <img
            src={props.url}
            style={{
              width: props.width ? "100%" : "auto",
              height: props.height ? "100%" : "auto"
            }}
            alt={props.alt}
          />
        </div>
      );
    }
  }
  // assets
  else {
    console.log(props);
    const path = require("assets/img/" + props.url);
    if (props.isBackground) {
      content = (
        <div
          style={{
            background: "url('" + path + "') center no-repeat",
            backgroundSize: "100% auto",
            width: props.width,
            height: props.height,
            borderRadius: props.borderRadius,
            float: props.float
          }}
        >
          {props.children}
        </div>
      );
    } else {
      content = (
        <div style={{ width: props.width, height: props.height }}>
          <img
            src={path}
            style={{
              width: props.width ? "100%" : "auto",
              height: props.height ? "100%" : "auto"
            }}
            alt={props.alt}
          />
        </div>
      );
    }
  }
  return content;
};

export default Imagen;
