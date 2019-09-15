import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Imagen from "components/Atoms/Imagen/Imagen";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";
import ArrowForwardRounded from "@material-ui/icons/ArrowForwardRounded";
import Header from "components/Molecules/Header/Header";
import SectionImage from "components/Molecules/SectionImage/SectionImage";
import Offers from "components/Organisms/Offers/Offers";
import Places from "components/Organisms/Places/Places";
import Footer from "components/Organisms/Footer/Footer";
import { Grid } from "@material-ui/core";
import Axios from "core/axios";

class DestinoDubai extends Component {
  constructor(props) {
    super(props);
    this.service = new Axios();
    this.state = {
      offers: [],
      places: [
        { image: "Boton_DOHA.jpg", label: "DOHA", link: "/doha" },
        { image: "Boton_ABU_DHABI.jpg", label: "ABU DHABI", link: "/abu-dhabi" }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.service
      .getOffersVisibleWithParams({ limit: 4, place: "dubai" })
      .then(response => {
        console.log(response.data);
        this.setState({ offers: response.data });
      });
  }

  render() {
    return (
      <Grid container>
        <NavBar />
        {/* SECCION HEADER */}
        <Header
          image="Destino_Dubai_Header.jpg"
          title="La magia de Dubai"
          btnText="INSCRIBIRSE"
          gradient="header-white"
        />
        {/* SECCION TRABAJA EN DUBAI */}
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Imagen
              width="580px"
              height="445px"
              borderRadius="8px"
              url="Destino_Dubai_Trabaja.jpg"
              isBackground
              float="left"
            />
            <div style={{ marginLeft: "57px", width: "521px" }}>
              <Text variant="h2" margin="0px 0px 47px" isBold>
                Trabaja en Dubai
              </Text>
              <Text variant="p3" lineHeight="26px" margin="0 0 75px">
                La ciudad con más hoteles de Oriente Medio. Todas las cadenas
                hoteleras están presentes en Dubai, entre ellos algunos de los
                mejores del mundo. Es la ciudad con más oportunidades laborales
                en el sector. Las posibilidades de crecimiento son altísimas, y
                más con vistas a la EXPO que llegará a Dubai en Octubre 2020 y
                rozará el lleno en sus hoteles. Conseguir el visado es
                relativamente sencillo aquí.
              </Text>
              <Button
                variant="icon"
                width="356px"
                height="56px"
                icon={
                  <ArrowForwardRounded
                    style={{
                      color: "#FFC80A",
                      position: "relative",
                      right: "-30px"
                    }}
                  />
                }
                fontSize="20px"
                btnBorder="1px solid #FFC80A"
              >
                COMO FUNCIONA
              </Button>
            </div>
          </div>
        </Grid>
        {/* SECTION TESTIMONIO */}
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <SectionImage />
        </Grid>
        {/* SECTION OFFERS */}
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <Offers title="Ofertas en Dubai" offers={this.state.offers} />
        </Grid>
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <Places
            places={this.state.places}
            widthButton="260px"
            heightButton="108px"
            letterSpacing="4px"
            fontSize="20px"
          />
        </Grid>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "56px",
            marginBottom: "67px"
          }}
        >
          <div style={{ marginRight: "57px", width: "621px" }}>
            <Text variant="h2" margin="0px 0px 46px">
              ¿Por qué Dubai?
            </Text>
            <Text variant="p3" lineHeight="26px" margin="0px 0px 95px">
              Dubai es gigante, la ciudad más grande Oriente Medio. Recorrerla
              de punta a punta supone casi una hora en coche. La ciudad más
              alocada y liberal de todas. Tiene infinidad de planes por hacer,
              pero principalmente, infinidad de bares, discotecas y beach clubs
              en los que salir a pasarlo bien. Dubai se reinventa siempre para
              mantener la atención turística mundial.
            </Text>
            <Button
              variant="icon"
              width="356px"
              height="56px"
              icon={
                <ArrowForwardRounded
                  style={{
                    color: "#FFC80A",
                    position: "relative",
                    right: "-30px"
                  }}
                />
              }
              fontSize="20px"
              btnBorder="1px solid #FFC80A"
            >
              VER MÁS INFORMACIÓN
            </Button>
          </div>
          <Imagen
            width="580px"
            height="445px"
            borderRadius="8px"
            url="why_dubai.jpg"
            isBackground
          />
        </div>
        <Footer />
      </Grid>
    );
  }
}

export default DestinoDubai;
