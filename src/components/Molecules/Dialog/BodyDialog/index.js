import React from "react";
import { Grid, Button } from "@material-ui/core";
import Text from "components/Atoms/Text/Text";
import Input from "components/Atoms/Input/Input";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Select from "components/Atoms/Select/Select";

const BodyDialog = props => {
  let content;
  switch (props.variant) {
    case "offer":
      content = (
        <div>
          <Text variant="p3">{props.body}</Text>
          {props.moreInfo && (
            <div>
              <hr />
              <Text variant="p3">{props.moreInfo}</Text>
            </div>
          )}
        </div>
      );
      break;
    case "successOffer":
      content = [
        <Text variant="p1">
          Gracias por inscribirte en la oferta. Nuestro equipo de recursos
          humanos se pondra en contacto contigo si cumples con los requisitos
          del puesto.
        </Text>,
        <Text variant="p1" margin="16px 0 0 0">
          ¡Te deseamos mucha suerte!
        </Text>
      ];
      break;
    case "formOffer":
      content = [
        <Text variant="customize" fontSize="18px" color="#A7A7A7">
          Datos personales como aparecen en tu pasaporte
        </Text>,
        <Input
          fullWidth
          id="idName"
          label="Nombre"
          margin="normal"
          maxLength="100"
          name="name"
          onChange={props.inputHandler}
          required
          type="text"
          value={props.name}
          variant="outlined"
        />,
        <Input
          fullWidth
          id="idPassport"
          label="Nº Pasaporte"
          margin="normal"
          maxLength="100"
          name="passport"
          onChange={props.inputHandler}
          required
          type="text"
          value={props.passport}
          variant="outlined"
        />,
        <Text
          variant="customize"
          fontSize="18px"
          color="#A7A7A7"
          margin="24px 0 0 0"
        >
          Datos de contacto para hablar contigo
        </Text>,
        <Input
          fullWidth
          id="idEmail"
          label="Email"
          margin="normal"
          maxLength="100"
          name="email"
          onChange={props.inputHandler}
          required
          type="email"
          value={props.email}
          variant="outlined"
        />,
        <Input
          fullWidth
          id="idPhone"
          label="Teléfono"
          margin="normal"
          maxLength="100"
          name="phone"
          onChange={props.inputHandler}
          required
          type="number"
          value={props.phone}
          variant="outlined"
        />,
        <Text
          variant="customize"
          fontSize="18px"
          color="#A7A7A7"
          margin="24px 0 0 0"
        >
          Sobre ti
        </Text>,
        <Select
          fullWidth
          variant="outlined"
          idInput="idEnglish"
          labelInput="Nivel de Inglés"
          value={props.levelEnglish}
          handleChange={props.selectHandler}
          name="levelEnglish"
          items={props.itemsEnglish}
        />,
        // <Select
        //   fullWidth
        //   variant="outlined"
        //   idInput="idEnglish"
        //   labelInput="Departamento"
        //   value={props.levelEnglish}
        //   handleChange={props.selectHandler}
        //   name="levelEnglish"
        //   items={props.itemsEnglish}
        // />,
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "16px"
          }}
        >
          <Text variant="p3" margin="0 16px 0 0">
            Sube tu CV
          </Text>
          <input
            id="raised-button-file"
            multiple
            type="file"
            style={{ display: "none" }}
          />
          <label htmlFor="raised-button-file">
            <Button
              raised
              component="span"
              aria-label="outlined"
              variant="outlined"
            >
              <CloudUploadIcon />
            </Button>
          </label>
        </div>
      ];
      break;
    default:
      break;
  }
  return (
    <Grid container justify="center" style={{ padding: "16px" }}>
      <Grid item xs={10}>
        {content}
      </Grid>
    </Grid>
  );
};

export default BodyDialog;
