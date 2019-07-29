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
      let radius;
      let size;
      if (props.isCircle) {
        radius = props.width;
        size = "200%";
      } else {
        radius = props.borderRadius;
        size = props.sizeImage || "100%";
      }

      let gradient;
      switch (props.gradient) {
        case "black":
          gradient =
            "linear-gradient(-180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), ";
          break;
        case "white":
          gradient =
            "linear-gradient(-180deg, rgba(255,255,255,.5) 0%, rgba(255,255,255,.5) 100%), ";
          break;
        case "header-white":
          gradient =
            "linear-gradient(-180deg, rgba(255,255,255,0.6) 10%, rgba(255,255,255,0) 39%), ";
          break;
        default:
          gradient = "";
          break;
      }

      content = (
        <div
          style={{
            background: gradient + "url('" + path + "') center no-repeat",
            backgroundSize: size + " auto",
            width: props.width,
            height: props.height,
            borderRadius: radius,
            float: props.float,
            position: props.position,
            top: props.top
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
