import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  header: props => ({
    position: "relative",
    background:
      "linear-gradient(-180deg, rgba(255, 255, 255, 0.6) 10%, rgba(255, 255, 255, 0) 39%), url('" +
      props.path +
      "') " +
      props.position +
      " no-repeat",
    [theme.breakpoints.down("md")]: {
      backgroundSize: "300% auto",
      minHeight: "200px",
      height: "80vh"
    },
    [theme.breakpoints.up("md")]: {
      backgroundSize: "100% auto",
      minHeight: "500px",
      height: "80vh"
    }
  }),
  backgroundWhite: props => ({
    background:
      "linear-gradient(-180deg, rgba(255,255,255,.5) 0%, rgba(255,255,255,.5) 100%), url('" +
      props.path +
      "') " +
      props.position +
      " no-repeat",
    [theme.breakpoints.down("md")]: {
      backgroundSize: "300% auto",
      minHeight: "500px",
      height: "auto"
    },
    [theme.breakpoints.up("md")]: {
      backgroundSize: "100% auto",
      minHeight: "500px",
      height: "auto"
    }
  })
  // buttonImage: props => ({
  //   background:
  //   "linear-gradient(-180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url('" + props.path +
  // })
}));

const Imagen = props => {
  let newProps = { ...props };
  if (!props.isUrl) {
    newProps.position = props.position || "center center";
    newProps.path = require("assets/img/" + props.url);
  }
  // console.log(props.position);
  const classes = useStyles(newProps);
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
    // console.log(props);
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
      let backgroundPosition = props.backgroundPosition || "center";
      content = (
        <div
          style={{
            background:
              gradient +
              "url('" +
              path +
              "') " +
              backgroundPosition +
              " no-repeat",
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

  if (props.variant === "header-white") {
    content = <div className={classes.header}> {props.children}</div>;
  }
  if (props.variant === "white") {
    content = <div className={classes.backgroundWhite}> {props.children}</div>;
  }
  return content;
};

export default Imagen;
