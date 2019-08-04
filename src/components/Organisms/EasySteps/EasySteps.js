import React from "react";
import Stepper from "components/Molecules/Stepper";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";
import Imagen from "components/Atoms/Imagen/Imagen";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  stepper: props => ({
    width: "70%",
    marginLeft: "15%"
  }),
  imageBackground: props => ({
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    zIndex: "2",
    [theme.breakpoints.up("md")]: {
      marginTop: "-70px"
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "-92px"
    }
  })
}));

const EasySteps = props => {
  const classes = useStyles(props);
  const contain = (
    <div style={{ textAlign: "center", top: "48px", position: "relative" }}>
      <Text variant="h2" weight>
        4 sencillos pasos
      </Text>
      <div className={classes.stepper}>
        <Stepper type={props.type} data={props.data} />
      </div>
      <div className={classes.imageBackground}>
        <Imagen
          style={{ zIndex: "2", opacity: "0.65", filter: "alpha(opacity=50)" }}
          url="Home_4Sencillospasos.jpg"
          height="216px"
          width="100%"
          isBackground
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              zIndex: "2",
              marginTop: "124px"
            }}
          >
            <Button
              style={{ zIndex: "1" }}
              width="188px"
              height="51px"
              isBold
              letterSpacing="3.2px"
              link="/inscribirse"
            >
              INSCRIBIRSE
            </Button>
          </div>
        </Imagen>
      </div>
    </div>
  );
  return contain;
};

export default EasySteps;
