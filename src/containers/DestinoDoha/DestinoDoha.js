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

class DestinoDoha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [
        {
          id: "offer0",
          position: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DOHA.jpg",
          place: "DUBAI",
          infoOffer:
            "Idealmente gente joven con ganas de una experiencia única en el mundo. Inglés fluido, con muchas corvas y que las tengan hidratadas para un correcto bien estar."
        },
        {
          id: "offer1",
          position: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DOHA.jpg",
          place: "DUBAI",
          infoOffer:
            "Idealmente gente joven con ganas de una experiencia única en el mundo. Inglés fluido, con muchas corvas y que las tengan hidratadas para un correcto bien estar."
        },
        {
          id: "offer2",
          position: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DOHA.jpg",
          place: "DUBAI",
          infoOffer:
            "Idealmente gente joven con ganas de una experiencia única en el mundo. Inglés fluido, con muchas corvas y que las tengan hidratadas para un correcto bien estar."
        },
        {
          id: "offer3",
          position: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DOHA.jpg",
          place: "DUBAI",
          infoOffer:
            "Idealmente gente joven con ganas de una experiencia única en el mundo. Inglés fluido, con muchas corvas y que las tengan hidratadas para un correcto bien estar."
        }
      ],
      places: [
        { image: "Boton_DUBAI.jpg", label: "DUBAI", link: "/dubai" },
        { image: "Boton_ABU_DHABI.jpg", label: "ABU DHABI", link: "/abu-dhabi" }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
        />
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
                Oriente Medio representa los más altos estándares de servicio en
                hospitality en todo el mundo. Su inversión en turismo acelera su
                rápido desarrollo en todos los aspectos. Sus países, cada vez
                más liberales, se abren al mundo permitiendo la llegada de
                millones de visitantes. La arena blanca interminable y los mares
                color turquesa con sus vistas únicas y atracciones de fama
                mundial, son las razones por las que se construyen cada vez más
                cadenas hoteleras de fama internacional.{" "}
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
          <Offers title="Ofertas en Doha" offers={this.state.offers} />
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
              ¿Por qué Middle East?
            </Text>
            <Text variant="p3" lineHeight="26px" margin="0px 0px 95px">
              Oriente Medio representa los más altos estándares de servicio en
              hospitality en todo el mundo. Su inversión en turismo acelera su
              rápido desarrollo en todos los aspectos. Sus países, cada vez más
              liberales, se abren al mundo permitiendo la llegada de millones de
              visitantes. La arena blanca interminable y los mares color
              turquesa con sus vistas únicas y atracciones de fama mundial, son
              las razones por las que se construyen cada vez más cadenas
              hoteleras de fama internacional.
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
            url="Porque_ME.jpg"
            isBackground
          />
        </div>
        <Footer />
      </Grid>
    );
  }
}

export default DestinoDoha;
