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

class DestinoDoha extends Component {
  constructor(props) {
    super(props);
    this.service = new Axios();
    this.state = {
      offers: [],
      places: [
        { image: "Boton_DUBAI.jpg", label: "DUBAI", link: "/dubai" },
        { image: "Boton_ABU_DHABI.jpg", label: "ABU DHABI", link: "/abu-dhabi" }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // this.service
    //   .getOffersVisibleWithParams({ limit: 4, place: "doha" })
    //   .then(response => {
    //     console.log(response.data);
    //     this.setState({ offers: response.data });
    //   });
  }

  render() {
    return (
      <Grid container>
        <NavBar />
        {/* SECCION HEADER */}
        <Header
          image="Destino_Doha_Header.jpg"
          title="Explora Doha"
          titleColor="#fff"
          btnText="INSCRIBIRSE"
          gradient="header-white"
        >
          <Text variant="h1" color="#fff" isBold>
            Explora Doha
          </Text>
          <Button
            variant="primary"
            width="189px"
            height="51px"
            isBold
            fontSize="12px"
            letterSpacing="2.4px"
            link="/inscribirse"
          >
            INSCRIBIRSE
          </Button>
        </Header>
        {/* SECCION TRABAJA EN DOHA */}
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
              url="Destino_Doha_Trabaja.jpg"
              sizeImage="140%"
              isBackground
              float="left"
            />
            <div style={{ marginLeft: "57px", width: "521px" }}>
              <Text variant="h2" margin="0px 0px 47px" isBold>
                Trabaja en Doha
              </Text>
              <Text variant="p3" lineHeight="26px" margin="0 0 75px">
                Doha es económicamente la ciudad más fuerte y que más crece a
                día de hoy en todo Oriente Medio. Las posibilidades de hacer
                carrera y crecer son altísimas, principalmente por la inversión
                turística en hoteles, que se construyen a contrarreloj con
                vistas al Mundial de Futbol de 2022. Los salarios son por lo
                general más altos que en Emiratos Árabes. Conseguir el visado
                aquí requiere la realización de pruebas médicas previas a
                viajar.
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
                link="/como-funciona"
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
        {/* <Grid item xs={12} style={{ marginTop: "48px" }}>
          <Offers title="Ofertas en Doha" offers={this.state.offers} />
        </Grid> */}
        <Grid item xs={12} style={{ marginTop: "64px" }}>
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
              ¿Por qué Doha?
            </Text>
            <Text variant="p3" lineHeight="26px" margin="0px 0px 95px">
              Más acogedora que ninguna otra, Doha es una de las ciudades más
              seguras del mundo. La ciudad crece a ritmos agigantados en
              infraestructuras y número de hoteles. Sus planes de barco y agua,
              el desierto, su mercado tradicional (shooq) y sus numerosos
              parques y espacios abiertos para practicar deporte, son algunas de
              las razones por las que elegir Doha.
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
            url="why_doha.jpg"
            isBackground
          />
        </div>
        <Footer />
      </Grid>
    );
  }
}

export default DestinoDoha;
