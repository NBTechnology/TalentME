import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Button from "components/Atoms/Button/Button";
import Imagen from "components/Atoms/Imagen/Imagen";
import Text from "components/Atoms/Text/Text";
import Footer from "components/Organisms/Footer/Footer";
import Input from "components/Atoms/Input/Input";
import { Checkbox, Grid } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import LocationOnRounded from "@material-ui/icons/LocationOnRounded";
import PhoneRounded from "@material-ui/icons/PhoneRounded";
import EmailRounded from "@material-ui/icons/EmailRounded";
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      phone: "",
      checkPolity: false
    };
  }

  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <Grid container component="main" justify="center">
        <NavBar />
        <Header
          image="Contacto_Header.jpg"
          gradient="header-white"
          position="center bottom"
        />
        <Grid item xs={12} style={{ textAlign: "center", marginTop: "42px" }}>
          <Text variant="h2">¿En qué podemos ayudar?</Text>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={4}>
              <div
                style={{
                  background: "#F2F2F2",
                  borderRadius: "4px",
                  width: "100%",
                  height: "80px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text variant="customize" fontSize="32px">
                  Contacto
                </Text>
              </div>
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
                id="idCompany"
                label="Compañía"
                margin="normal"
                maxLength="100"
                name="company"
                onChange={this.inputHandler}
                required
                type="text"
                value={this.state.company}
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end"
                }}
              >
                <Checkbox
                  checked={this.state.checkPolity}
                  onChange={this.handleChange("checkPolity")}
                  color="default"
                  value="checkPolity"
                />
                <Text variant="customize" fontSize="12px">
                  Acepto la politica de privacidad
                </Text>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end"
                }}
              >
                <Button
                  variant="primary"
                  width="127px"
                  height="38px"
                  fontSize="10px"
                  isBold
                  letterSpacing="2px"
                >
                  ENVIAR
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                style={{
                  background: "#F2F2F2",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px"
                }}
              >
                <Text variant="customize" fontSize="32px" textAlign="center">
                  Oficina central
                </Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "8px",
                    alignItems: "center",
                    marginTop: "16px"
                  }}
                >
                  <LocationOnRounded
                    style={{ color: "#FFC80A", fontSize: "46px" }}
                  />
                  <Text variant="customize" fontSize="18px" margin="0 16px">
                    Calle Nuñez de Balboa 120, Coworking Cink Emprende, Madrid.
                    España.
                  </Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "8px",
                    alignItems: "center"
                  }}
                >
                  <PhoneRounded
                    style={{ color: "#FFC80A", fontSize: "46px" }}
                  />
                  <Text variant="customize" fontSize="18px" margin="0 16px">
                    +34 635 891 509
                  </Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "8px",
                    alignItems: "center"
                  }}
                >
                  <EmailRounded
                    style={{ color: "#FFC80A", fontSize: "46px" }}
                  />
                  <Text variant="customize" fontSize="18px" margin="0 16px">
                    talent@talentme-experience.com
                  </Text>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default ContactUs;
