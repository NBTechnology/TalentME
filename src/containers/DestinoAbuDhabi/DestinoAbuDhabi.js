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

class DestinoAbuDhabi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [
        {
          id: "offer0",
          title: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DOHA.jpg",
          label: "DUBAI",
          infoOffer:
            "Idealmente gente joven con ganas de una experiencia única en el mundo. Inglés fluido, con muchas corvas y que las tengan hidratadas para un correcto bien estar."
        },
        {
          id: "offer1",
          title: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DOHA.jpg",
          label: "DUBAI",
          infoOffer:
            "Idealmente gente joven con ganas de una experiencia única en el mundo. Inglés fluido, con muchas corvas y que las tengan hidratadas para un correcto bien estar."
        },
        {
          id: "offer2",
          title: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DOHA.jpg",
          label: "DUBAI",
          infoOffer:
            "Idealmente gente joven con ganas de una experiencia única en el mundo. Inglés fluido, con muchas corvas y que las tengan hidratadas para un correcto bien estar."
        },
        {
          id: "offer3",
          title: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DOHA.jpg",
          label: "DUBAI",
          infoOffer:
            "Idealmente gente joven con ganas de una experiencia única en el mundo. Inglés fluido, con muchas corvas y que las tengan hidratadas para un correcto bien estar."
        }
      ],
      places: [
        { image: "Boton_DUBAI.jpg", label: "DUBAI", link: "/dubai" },
        { image: "Boton_DOHA.jpg", label: "DOHA", link: "/doha" }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <NavBar />
        {/* SECCION HEADER */}
        <Header
          image="Destino_AbuDhabi_Header.jpg"
          title="La experiencia de Abu Dhabi"
          titleColor="#fff"
          btnText="INSCRIBIRSE"
          gradient="header-white"
        />
        {/* SECCION TRABAJA EN DOHA */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "48px"
          }}
        >
          <Imagen
            width="580px"
            height="445px"
            borderRadius="8px"
            url="Destino_AbuDhabi_trabaja.jpg"
            isBackground
            float="left"
          />
          <div style={{ marginLeft: "57px", width: "521px" }}>
            <Text variant="h2" margin="0px 0px 47px" isBold>
              Trabaja en Abu Dhabi
            </Text>
            <Text variant="p3" lineHeight="26px" margin="0 0 75px">
              Oriente Medio representa los más altos estándares de servicio en
              hospitality en todo el mundo. Su inversión en turismo acelera su
              rápido desarrollo en todos los aspectos. Sus países, cada vez más
              liberales, se abren al mundo permitiendo la llegada de millones de
              visitantes. La arena blanca interminable y los mares color
              turquesa con sus vistas únicas y atracciones de fama mundial, son
              las razones por las que se construyen cada vez más cadenas
              hoteleras de fama internacional.{" "}
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
        {/* SECTION TESTIMONIO */}
        <SectionImage />
        {/* SECTION OFFERS */}
        <Offers title="Ofertas en Abu Dhabi" offers={this.state.offers} />
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Button
            variant="primary"
            width="270px"
            height="51px"
            fontSize="16px"
            isBold
            letterSpacing="3.2px"
          >
            TODAS LAS OFERTAS
          </Button>
        </div>
        <Places
          places={this.state.places}
          widthButton="260px"
          heightButton="108px"
          letterSpacing="4px"
          fontSize="20px"
        />
        <div
          style={{
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
      </div>
    );
  }
}

export default DestinoAbuDhabi;
