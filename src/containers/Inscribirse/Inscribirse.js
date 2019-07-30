import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Requisites from "components/Organisms/Requisites/Requisites";
import { textAlign } from "@material-ui/system";
import Text from "components/Atoms/Text/Text";
import Footer from "components/Organisms/Footer/Footer";
import Input from "components/Atoms/Input/Input";

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
      ]
    };
  }
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
              name="NameInput"
              onChange={function onChange() {}}
              required
              type="text"
              value=""
              variant="outlined"
            />
            <Input
              fullWidth
              id="idApellidos"
              label="Apellidos"
              margin="normal"
              maxLength="100"
              name="NameInput"
              onChange={function onChange() {}}
              required
              type="text"
              value=""
              variant="outlined"
            />
            <Input
              fullWidth
              id="idPassport"
              label="Nº Pasaporte"
              margin="normal"
              maxLength="100"
              name="NameInput"
              onChange={function onChange() {}}
              required
              type="text"
              value=""
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
              name="NameInput"
              onChange={function onChange() {}}
              required
              type="email"
              value=""
              variant="outlined"
            />
            <Input
              fullWidth
              id="idPhone"
              label="Teléfono"
              margin="normal"
              maxLength="100"
              name="NameInput"
              onChange={function onChange() {}}
              required
              type="number"
              value=""
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Inscribirse;
