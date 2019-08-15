import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Requisites from "components/Organisms/Requisites/Requisites";
import Text from "components/Atoms/Text/Text";
import Footer from "components/Organisms/Footer/Footer";
import Input from "components/Atoms/Input/Input";
import Select from "components/Atoms/Select/Select";
import { Button, Grid } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

class Inscribirse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requisites: [
        {
          id: "requisite0",
          title: "+18 EDAD MINIMA",
          text:
            "18 años es la edad mínima para trabajar en el Oriente Medio. Y 21 años es la edad mínima para trabajar sirviendo alcohol. ",
          url: "icons/Icon_18.svg"
        },
        {
          id: "requisite1",
          title: "NIVEL DE INGLÉS",
          text:
            "Si vas a trabajar en inglés, deberás hablarlo sin dificultad. Realizarás la entrevista con el hotel completamente en inglés.",
          url: "icons/Icon_English.svg"
        },
        {
          id: "requisite2",
          title: "PROACTIVO",
          text:
            "Tendrás que salir de tu zona de confort. Dispuesto a viajar y trabajar en el extranjero.",
          url: "icons/Icon_Proactivo.svg"
        }
      ],
      levelEnglish: "",
      name: "",
      surname: "",
      passport: "",
      email: "",
      phone: "",
      itemsEnglish: [
        {
          id: 0,
          value: "bajo",
          label: "Nivel bajo"
        },
        {
          id: 1,
          value: "medio",
          label: "Nivel medio"
        },
        {
          id: 2,
          value: "alto",
          label: "Nivel alto"
        }
      ]
    };
  }

  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  selectHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Grid container component="main">
        <NavBar />
        <Header image="Inscribirse_Header.jpg" gradient="header-white" />
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <Requisites data={this.state.requisites} />
        </Grid>
        <Grid item xs={12} style={{ marginTop: "48px", textAlign: "center" }}>
          <Text variant="h2">
            Inscribete a tu nueva experiencia profesional
          </Text>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <Grid
            container
            justify="center"
            style={{
              background: "#F2F2F2",
              paddingBottom: "48px"
            }}
          >
            <Grid
              item
              xs={10}
              md={8}
              style={{ textAlign: "center", paddingTop: "55px" }}
            >
              <Text variant="customize" fontSize="22px">
                Formulario de inscripción
                <span style={{ color: "red" }}>*</span>
              </Text>
            </Grid>
            <Grid
              item
              xs={10}
              md={8}
              style={{
                marginTop: "24px",
                background: "#FFFFFF",
                borderRadius: "5px",
                padding: "16px 24px"
              }}
            >
              <Text variant="customize" fontSize="18px" color="#A7A7A7">
                Datos personales como aparecen en tu pasaporte
              </Text>
              <Input
                fullWidth
                id="idName"
                label="Nombre"
                margin="normal"
                maxLength="100"
                name="name"
                onChange={this.inputHandler}
                required
                type="text"
                value={this.state.name}
                variant="outlined"
              />
              <Input
                fullWidth
                id="idApellidos"
                label="Apellidos"
                margin="normal"
                maxLength="100"
                name="surname"
                onChange={this.inputHandler}
                required
                type="text"
                value={this.state.surname}
                variant="outlined"
              />
              <Input
                fullWidth
                id="idAge"
                label="Año de nacimineto"
                margin="normal"
                maxLength="100"
                name="age"
                onChange={this.inputHandler}
                required
                type="text"
                value={this.state.passport}
                variant="outlined"
              />
              <Text
                variant="customize"
                fontSize="18px"
                color="#A7A7A7"
                margin="24px 0 0 0"
              >
                Datos de contacto para hablar contigo
              </Text>
              <Input
                fullWidth
                id="idEmail"
                label="Email"
                margin="normal"
                maxLength="100"
                name="email"
                onChange={this.inputHandler}
                required
                type="email"
                value={this.state.email}
                variant="outlined"
              />
              <Input
                fullWidth
                id="idPhone"
                label="Teléfono"
                margin="normal"
                maxLength="100"
                name="phone"
                onChange={this.inputHandler}
                required
                type="text"
                value={this.state.phone}
                variant="outlined"
              />
              <Text
                variant="customize"
                fontSize="18px"
                color="#A7A7A7"
                margin="24px 0 0 0"
              >
                Sobre ti
              </Text>
              <Select
                fullWidth
                variant="outlined"
                idInput="idEnglish"
                labelInput="Nivel de Inglés"
                value={this.state.levelEnglish}
                handleChange={this.selectHandler}
                name="levelEnglish"
                items={this.state.itemsEnglish}
              />
              <Select
                fullWidth
                variant="outlined"
                idInput="idEnglish"
                labelInput="Departamento"
                value={this.state.levelEnglish}
                handleChange={this.selectHandler}
                name="levelEnglish"
                items={this.state.itemsEnglish}
              />
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
                  accept="image/*"
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
              <Text variant="p3" margin="16px 0 8px 0">
                Mensaje
              </Text>
              <textarea
                style={{
                  border: "1px solid #979797",
                  borderRadius: "4px",
                  width: "60%",
                  minHeight: "150px"
                }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Footer />
      </Grid>
    );
  }
}

export default Inscribirse;
