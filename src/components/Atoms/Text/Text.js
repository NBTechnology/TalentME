import React from "react";

const Text = props => {
  let content;

  let style = {
    fontWeight: props.weight ? "700" : "400",
    fontSize: props.fontSize,
    letterSpacing: props.letterSpacing
  };

  if (props.padding) style.padding = props.padding;
  if (props.margin) style.margin = props.margin;
  if (props.lineHeight) style.lineHeight = props.lineHeight;
  if (props.textAlign) style.textAlign = props.textAlign;
  switch (props.variant) {
    case "h1":
      style.fontWeight = "700";
      style.letterSpacing = "0";
      style.fontSize = "56px";
      style.color = props.color || "#212121";
      content = <h1 style={style}>{props.children}</h1>;
      break;
    case "h2":
      style.fontWeight = "400";
      style.letterSpacing = "0";
      style.fontSize = "48px";
      style.color = props.color || "#212121";
      content = <h2 style={style}>{props.children}</h2>;
      break;
    case "p1":
      style.fontWeight = "700";
      style.letterSpacing = "4px";
      style.fontSize = "20px";
      style.color = props.color || "#000000";
      content = <p style={style}>{props.children}</p>;
      break;
    case "p2":
      style.fontWeight = "400";
      style.letterSpacing = "0";
      style.fontSize = "20px";
      style.color = props.color || "#000000";
      content = <p style={style}>{props.children}</p>;
      break;
    case "p3":
      style.fontWeight = "400";
      style.letterSpacing = "0";
      style.fontSize = "16px";
      style.color = props.color || "#000000";
      content = <p style={style}>{props.children}</p>;
      break;
    case "customize":
      style.color = props.color;
      content = <p style={style}>{props.children}</p>;
      break;
    default:
      content = <p style={style}>{props.children}</p>;
      break;
  }
  return content;
};

export default Text;
