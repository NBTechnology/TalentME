import React from "react";
import Text from "components/Atoms/Text/Text";
import Imagen from "components/Atoms/Imagen/Imagen";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  stepImage: props => ({
    [theme.breakpoints.down("md")]: {
      height: "200px"
    },
    [theme.breakpoints.up("md")]: {
      height: "400px"
    }
  }),
  stepText: props => ({
    [theme.breakpoints.down("md")]: {
      background: " url('" + props.path + "') right bottom no-repeat",
      order: "0",
      height: "200px",
      backgroundSize: "40%"
    },
    [theme.breakpoints.up("md")]: {
      background: " url('" + props.path + "') " + props.position + " no-repeat",
      order: props.number % 2 === 0 ? -1 : 0,
      height: "400px",
      backgroundSize: "40%",
      padding: "0 30px"
    }
  })
  // buttonImage: props => ({
  //   background:
  //   "linear-gradient(-180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url('" + props.path +
  // })
}));

const EasyStepWork = props => {
  let newProps = { ...props };
  newProps.path = require("assets/img/icons/step" + props.number + ".png");
  const classes = useStyles(newProps);
  return (
    <Grid
      container
      justify="center"
      style={{
        marginTop: "80px",
        padding: "0 30px"
      }}
    >
      <Grid item xs={12} md={6} className={classes.stepImage}>
        <Imagen
          width="100%"
          height="100%"
          borderRadius="8px"
          url={"ComoFunciona" + props.number + ".jpg"}
          isBackground
          float="left"
          sizeImage="150%"
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className={classes.stepText}
        // style={{
        //   background: " url('" + path + "') " + props.position + " no-repeat",
        //   backgroundSize: "40%",
        //   order: props.number % 2 === 0 ? -1 : 0,
        //   height: "400px",
        //   width: "400px",
        //   paddingLeft: "30px",
        //   paddingRight: "30px"
        // }}
      >
        <Text variant="p1">{props.title}</Text>
        <Text variant="p3" margin="16px 0 0 0">
          {props.text}
        </Text>
      </Grid>
    </Grid>
  );
};

export default EasyStepWork;
