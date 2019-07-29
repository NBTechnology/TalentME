import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Places from "components/Organisms/Places/Places";
import Facilities from "components/Organisms/Facilities/Facilities";
import Offers from "components/Organisms/Offers/Offers";
import Button from "components/Atoms/Button/Button";
import Imagen from "components/Atoms/Imagen/Imagen";
import ArrowForwardRounded from "@material-ui/icons/ArrowForwardRounded";
import Footer from "components/Organisms/Footer/Footer";
import Text from "components/Atoms/Text/Text";
import EasySteps from "components/Organisms/EasySteps/EasySteps";

class Home extends Component {
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
        { image: "Boton_DOHA.jpg", label: "DOHA", link: "/doha" },
        {
          image: "Boton_ABU_DHABI.jpg",
          label: "ABU DHABI",
          link: "/abu-dhabi"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <Header
          image="Home_Header.jpg"
          title="Vive la experiencia de tu vida"
          btnText="INSCRIBIRSE"
        />
        <Places
          places={this.state.places}
          widthButton="260px"
          heightButton="108px"
          letterSpacing="4px"
          fontSize="20px"
        />
        <Facilities />

        {/* Inicio feature charly */}
        <EasySteps type={""} data={[{ title: "Inscripcion", image: "Porque_ME.jpg" }, { title: "Recibe ofertas", image: "Home_Header.jpg" },{ title: "Entrevista", image: "Porque_ME.jpg" }, { title: "¡Vuela!", image: "Porque_ME.jpg" }]} />

        {/* SECTION OFFERS */}
        <Offers title="Ofertas" offers={this.state.offers} />
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

export default Home;
