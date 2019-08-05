import React from "react";
import Imagen from "components/Atoms/Imagen/Imagen";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  insideHeader: props => ({
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      bottom: "20px",
      left: "20px"
    },
    [theme.breakpoints.up("md")]: {
      bottom: "41px",
      left: "156px",
      minWidth: "300px"
    }
  })
  // buttonImage: props => ({
  //   background:
  //   "linear-gradient(-180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url('" + props.path +
  // })
}));
const Header = props => {
  console.log(props);
  const classes = useStyles(props);
  return (
    <Grid item xs={12}>
      <Imagen
        isBackground
        url={props.image}
        variant={props.gradient}
        position={props.position}
      >
        <div className={classes.insideHeader}>
          <Text variant="h1" color={props.titleColor} isBold>
            {props.title}
          </Text>
          {props.btnText && (
            <Button
              variant="primary"
              width="189px"
              height="51px"
              isBold
              fontSize="12px"
              letterSpacing="2.4px"
              link={props.link}
            >
              {props.btnText}
            </Button>
          )}
        </div>
      </Imagen>
    </Grid>
  );
};

export default Header;
