import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Button from "components/Atoms/Button/Button";
import Text from "components/Atoms/Text/Text";

const useStyles = makeStyles(theme => ({
  headerItem: props => ({
    [theme.breakpoints.up("md")]: {
      borderRight: "1px solid #DBDBDB"
    }
  })
}));
const HeaderDialog = props => {
  const classes = useStyles(props);

  let content;
  switch (props.variant) {
    case "offer":
      content = [
        <Grid item xs={10} md={3}>
          <Button
            variant="image"
            gradient
            height="61px"
            bg={props.image}
            isBold
            letterSpacing="3.6px"
            fontSize="18px"
          >
            {props.name}
          </Button>
        </Grid>,
        <Grid item xs={10} md={6} style={{ paddingLeft: "20px" }}>
          <Text variant="p1">{props.jobName}</Text>
          <Text variant="p3">{props.location}</Text>
        </Grid>,
        <Grid item xs={2} md={3} />,
        <Grid
          item
          xs={10}
          md={4}
          className={classes.headerItem}
          style={{ paddingLeft: "20px", paddingTop: "20px" }}
        >
          <Text variant="p3">Localización</Text>
          <Text variant="p2">{props.name}</Text>
        </Grid>,
        <Grid
          item
          xs={10}
          md={4}
          className={classes.headerItem}
          style={{ paddingLeft: "20px", paddingTop: "20px" }}
        >
          <Text variant="p3">Salario</Text>
          <Text variant="p2">{props.salary}</Text>
        </Grid>,
        <Grid
          item
          xs={10}
          md={4}
          style={{ paddingLeft: "20px", paddingTop: "20px" }}
        >
          <Text variant="p3">Contrato</Text>
          <Text variant="p2">{props.durationContract}</Text>
        </Grid>
      ];
      break;
    case "formOffer":
      content = (
        <Text variant="customize" fontSize="22px">
          Formulario de inscripción
          <span style={{ color: "red" }}>*</span>
        </Text>
      );
      break;
    default:
      break;
  }
  return (
    <Grid container justify="center" style={{ padding: "16px" }}>
      {content}
    </Grid>
  );
};

export default HeaderDialog;
