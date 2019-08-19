import React from "react";
import { Grid, Checkbox } from "@material-ui/core";
import Button from "components/Atoms/Button/Button";
import Text from "components/Atoms/Text/Text";

const FooterDialog = props => {
  let content;
  switch (props.variant) {
    case "successOffer":
      content = [
        <Grid item xs={10}>
          <hr />
        </Grid>,
        <Grid item xs={10} md={3}>
          <Button variant="secondary" height="38px" onClick={props.onClose}>
            CERRAR
          </Button>
        </Grid>
      ];
      break;
    case "offer":
      content = [
        <Grid item xs={10} md={6}>
          <Button variant="primary" height="47px" onClick={props.onSubmit}>
            INSCRIBIRME
          </Button>
        </Grid>,
        <Grid item xs={10} md={6}>
          <Button variant="secondary" height="47px" onClick={props.onClose}>
            CANCELAR
          </Button>
        </Grid>
      ];
      break;
    case "formOffer":
      content = [
        <Grid item xs={10}>
          <hr />
        </Grid>,
        <Grid item xs={10}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end"
            }}
          >
            <Checkbox
              checked={props.checkPolity}
              onClick={props.handleChangePolity}
              color="default"
              value="checkPolity"
            />
            <Text variant="customize" fontSize="12px">
              Acepto la politica de privacidad
            </Text>
          </div>
        </Grid>,
        <Grid item xs={10} md={6}>
          <Button variant="primary" height="47px" onClick={props.onSubmit}>
            ENVIAR
          </Button>
        </Grid>,
        <Grid item xs={10} md={6}>
          <Button variant="secondary" height="47px" onClick={props.onClose}>
            CANCELAR
          </Button>
        </Grid>
      ];
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

export default FooterDialog;
