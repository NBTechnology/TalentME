import React from "react";
import "./Button.css";
import Text from "components/Atoms/Text/Text";

import { Link } from "react-router-dom";

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

  if (props.margin) style.margin = props.margin;

  switch (props.variant) {
    case "primary":
      style.background = props.btnBackground ? props.btnBackground : "#FFC80A";
      style.background = props.disabled ? "#a0a0a0" : style.background;
      if (props.btnBorderRadius) style.borderRadius = props.btnBorderRadius;
      break;
    case "secondary":
      style.background = props.btnBackground ? props.btnBackground : "#FFFFFF";
      if (props.btnBorderRadius) style.borderRadius = props.btnBorderRadius;
      if (props.btnBorder) style.border = props.btnBorder;
      if (props.color) style.color = props.color;
      break;
    case "icon":
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

        let gradient = props.gradient
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
  let contentButton = (
    <div style={style} onClick={props.disabled ? null : props.onClick}>
      <Text
        variant={props.textVariant}
        weight={props.isBold}
        fontSize={props.fontSize}
        letterSpacing={props.letterSpacing}
      >
        {props.children}
      </Text>
      {props.icon}
    </div>
  );

  let finalButton = props.link ? (
    <Link to={props.link} style={{ textDecoration: "none" }}>
      {contentButton}
    </Link>
  ) : (
    contentButton
  );
  return finalButton;
};

export default Button;
