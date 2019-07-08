import React from "react";
import "./Button.css";
import Text from "components/Atoms/Text/Text";
const Button = props => {
  let style = {
    width: props.width,
    height: props.height,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    cursor: "pointer"
  };
  switch (props.variant) {
    case "primary":
      style.background = props.btnBackground ? props.btnBackground : "#FFC80A";
      if (props.btnBorderRadius) style.borderRadius = props.btnBorderRadius;
      break;
    case "secondary":
      style.background = props.btnBackground ? props.btnBackground : "#FFFFFF";
      if (props.btnBorderRadius) style.borderRadius = props.btnBorderRadius;
      if (props.btnBorder) style.border = props.btnBorder;
      if (props.color) style.color = props.color;
      break;
    case "image":
      if (props.bg) {
        let path = require("assets/img/" + props.bg);
        style.boxShadow =
          "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)";

        let gradient = props.isGradient
          ? "linear-gradient(-180deg, rgba(252,255,252,0.00) 20%, rgba(0,0,0,0.74) 100%),"
          : "";
        style.background = gradient + "url('" + path + "') center no-repeat";
        style.backgroundSize = "100% auto";
        style.color = props.color ? props.color : "#FFFFFF";
      }
      break;
    default:
      style.background = props.btnBackground ? props.btnBackground : "#FFC80A";
      if (props.btnBorderRadius) style.borderRadius = props.btnBorderRadius;
      break;
  }

  return (
    <div style={style}>
      <Text
        variant={props.textVariant}
        weight={props.isBold}
        fontSize={props.fontSize}
        letterSpacing={props.letterSpacing}
      >
        {props.children}
      </Text>
    </div>
  );
};

export default Button;
