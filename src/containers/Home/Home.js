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
import Experiences from "components/Organisms/Experiences/Experiences";
import { Grid } from "@material-ui/core";

class Home extends Component {
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
        { image: "Boton_DUBAI.jpg", label: "DUBAI", link: "/dubai",id:"place_dubai" },
        { image: "Boton_DOHA.jpg", label: "DOHA", link: "/doha" , id:"place_doha" },
        {
          image: "Boton_ABU_DHABI.jpg",
          label: "ABU DHABI",
          link: "/abu-dhabi",
          id:"place_abudhabi"
        }
      ]
    };
  }
  render() {
    return (
      <Grid container component="main">
        <NavBar />
        <Header
          image="Home_Header.jpg"
          // title="Vive la experiencia de tu vida"
          btnText="INSCRIBIRSE"
          gradient="header-white"
          link="/inscribirse"
        />
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <Places
            places={this.state.places}
            widthButton="260px"
            heightButton="108px"
            letterSpacing="4px"
            fontSize="20px"
          />
        </Grid>
        <Facilities variant="home" />

        {/* Experiences :D */}
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <Experiences />
        </Grid>
        {/* Inicio feature charly */}
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <EasySteps
            type={""}
            data={[
              { title: "MANDA TU CV", image: "icons/Home_inscripcion.svg" },
              { title: "RECIBE OFERTAS", image: "icons/Home_jobs.svg" },
              { title: "ENTREVISTA", image: "icons/Home_entrevista.svg" },
              { title: "¡VUELA!!", image: "icons/Home_vuela.svg" }
            ]}
          />
        </Grid>

        {/* SECTION OFFERS */}
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <Offers title="Ofertas" offers={this.state.offers} />
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
              fontSize="20px"
              btnBorder="1px solid #FFC80A"
              icon={
                <ArrowForwardRounded
                  style={{
                    color: "#FFC80A",
                    position: "relative",
                    right: "-30px"
                  }}
                />
              }
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

export default Home;
