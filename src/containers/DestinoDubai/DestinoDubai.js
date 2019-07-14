import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Imagen from "components/Atoms/Imagen/Imagen";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";
import ArrowForwardRounded from "@material-ui/icons/ArrowForwardRounded";
import Header from "components/Molecules/Header/Header";
import SectionImage from "components/Molecules/SectionImage/SectionImage";
import Offers from "components/Organisms/Offers/Offers";

class DestinoDubai extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [
        {
          title: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DUBAI.jpg",
          label: "DUBAI"
        },
        {
          title: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DUBAI.jpg",
          label: "DUBAI"
        },
        {
          title: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DUBAI.jpg",
          label: "DUBAI"
        },
        {
          title: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DUBAI.jpg",
          label: "DUBAI"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        {/* SECCION HEADER */}
        <Header image="Destino_Dubai_Header.jpg" />
        {/* SECCION TRABAJA EN DUBAI */}
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
            url="Destino_Dubai_Trabaja.jpg"
            isBackground
            float="left"
          />
          <div style={{ marginLeft: "57px", width: "521px" }}>
            <Text variant="h2" margin="0px 0px 47px" isBold>
              Trabaja en Dubai
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
        <Offers title="Ofertas en Dubai" offers={this.state.offers} />
        <div
          style={{
            position: "relative",
            top: "60px",
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
      </div>
    );
  }
}

export default DestinoDubai;
