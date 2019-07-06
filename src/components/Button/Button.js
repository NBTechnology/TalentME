import React from "react";
import "./Button.css";
import Text from "components/Text/Text";
const Button = props => {
  let classButton;
  switch (props.type) {
    case "primary":
      classButton = "btnPrimary";
      break;
    case "secondary":
      classButton = "btnSecondary";
      break;
    case "image":
      classButton = "btnImage";
      break;
    default:
      classButton = "btnPrimary";
      break;
  }
  let content;
  if (props.type === "image" && props.bg) {
    let path = require("assets/img/" + props.bg);
    content = (
      <div
        className={classButton}
        style={{
          width: props.width,
          height: props.height,
          background:
            "linear-gradient(-180deg, rgba(252,255,252,0.00) 20%, rgba(0,0,0,0.74) 100%),url('" +
            path +
            "') center no-repeat",
          backgroundSize: "100% auto"
        }}
      >
        <Text weight={props.isBold}>{props.children}</Text>
      </div>
    );
  } else {
    content = (
      <div
        className={props.classes}
        style={{ width: props.width, height: props.height }}
      >
        <Text
          variant={props.variant}
          weight={props.isBold}
          size={props.fontSize}
          spacing={props.letterSpacing}
        >
          {props.children}
        </Text>
      </div>
    );
  }
  return content;
};

export default Button;
