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

class DestinoAbuDhabi extends Component {
  constructor(props) {
    super(props);
    this.service = new Axios();
    this.state = {
      offers: [],
      places: [
        { image: "Boton_DUBAI.jpg", label: "DUBAI", link: "/dubai" },
        { image: "Boton_DOHA.jpg", label: "DOHA", link: "/doha" }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // this.service
    //   .getOffersVisibleWithParams({ limit: 4, place: "abu dhabi" })
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
          image="Destino_AbuDhabi_Header.jpg"
          title="La experiencia de Abu Dhabi"
          titleColor="#fff"
          btnText="INSCRIBIRSE"
          gradient="header-white"
          position="center bottom"
        >
          <Text variant="h1" color="#fff" isBold>
            La experiencia <br />
            de Abu Dhabi
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
              url="Trabaja_Abu_dhabi.jpg"
              isBackground
              float="left"
            />
            <div style={{ marginLeft: "57px", width: "521px" }}>
              <Text variant="h2" margin="0px 0px 47px" isBold>
                Trabaja en Abu Dhabi
              </Text>
              <Text variant="p3" lineHeight="26px" margin="0 0 75px">
                En número de hoteles se sitúa muy por debajo de Dubai. Aún así,
                trabajar en Abu Dhabi es un plus para tu CV. Hoteles y
                restaurantes más entrañables donde acaparar un mayor
                conocimiento. La ciudad es la más saneada económicamente del
                país, lo que conlleva su potente crecimiento. Los salarios se
                sitúan algo por encima que los de Dubai. Relativamente fácil
                conseguir el visado también en Abu Dhabi.
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
          <Offers title="Ofertas en Abu Dhabi" offers={this.state.offers} />
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
              ¿Por qué Abu Dhabi?
            </Text>
            <Text variant="p3" lineHeight="26px" margin="0px 0px 95px">
              La capital de los Emiratos Árabes es también tierra de
              oportunidades. Más pequeña en tamaño pero mismo potencial de
              crecimiento. Abu Dhabi destaca por su gran premio de F1, su
              impresionante mezquita o el parque de atracciones Ferrari World.
              Tendrás desierto y playa a tiro de piedra, además de infinidad de
              deportes de agua. Disfrutarás de un buen ambiente para salir por
              la noche.
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
            url="why_abudhabi.jpg"
            isBackground
          />
        </div>
        <Footer />
      </Grid>
    );
  }
}

export default DestinoAbuDhabi;
