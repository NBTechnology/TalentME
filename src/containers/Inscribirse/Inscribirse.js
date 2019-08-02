import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Requisites from "components/Organisms/Requisites/Requisites";
import Text from "components/Atoms/Text/Text";
import Footer from "components/Organisms/Footer/Footer";
import Input from "components/Atoms/Input/Input";
import Select from "components/Atoms/Select/Select";
import { Button } from "@material-ui/core";
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
            "18 años es la edad mínima para trabajar en el Oriente Medio. Te acompañamos en todo.",
          url: "icons/Home_entrevista.svg"
        },
        {
          id: "requisite1",
          title: "NIVEL DE INGLÉS",
          text:
            "Nivel medio es indispensable para los hoteles con los que colaboramos. Practicarás tu inglés a diario.",
          url: "icons/Home_entrevista.svg"
        },
        {
          id: "requisite2",
          title: "PROACTIVO",
          text:
            "Saliendo de tu zona de confort, dispuesto a viajar y trabajar en el extranjero.",
          url: "icons/Home_entrevista.svg"
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
      <div>
        <NavBar />
        <Header image="Inscribirse_Header.jpg" gradient="header-white" />
        <Requisites data={this.state.requisites} />
        <div style={{ textAlign: "center", marginTop: "42px" }}>
          <Text variant="h2">
            Inscribete a tu nueva experiencia profesional
          </Text>
        </div>
        <div style={{ background: "#F2F2F2", paddingBottom: "48px" }}>
          <div style={{ width: "60%", marginLeft: "20%", paddingTop: "55px" }}>
            <Text variant="customize" fontSize="22px">
              Formulario de inscripción
              <span style={{ color: "red" }}>*</span>
            </Text>
          </div>
          <div
            style={{
              width: "60%",
              marginLeft: "20%",
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
              id="idPassport"
              label="Nº Pasaporte"
              margin="normal"
              maxLength="100"
              name="passport"
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
              type="number"
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Inscribirse;
