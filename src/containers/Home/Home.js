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
import Axios from "core/axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.service = new Axios();
    this.state = {
      offers: [],
      places: [
        {
          image: "Boton_DUBAI.jpg",
          label: "DUBAI",
          link: "/dubai",
          id: "place_dubai"
        },
        {
          image: "Boton_DOHA.jpg",
          label: "DOHA",
          link: "/doha",
          id: "place_doha"
        },
        {
          image: "Boton_ABU_DHABI.jpg",
          label: "ABU DHABI",
          link: "/abu-dhabi",
          id: "place_abudhabi"
        }
      ]
    };
  }

  //   id: "offer3",
  //   position: "Camarero",
  //   subTitle: "Marriot Dubai",
  //   image: "Boton_DOHA.jpg",
  //   place: "DUBAI",
  //   infoOffer:
  //     "Id

  /*
        {"id":"2",
        "job":"Camarero2",
        "location":"Marriot",
        "placesId":"1",
        "description":"Idealmente gente joven con ganas de una experiencia \u00fanica en el mundo.
Ingl\u00e9s fluido, con muchas corvas y que las tengan hidratadas para un correcto bien
estar.",
"salary":"2",
"durationContract":"2",
"moreInfo":"2",
"dateEnd":"2019-08-31",
"isVisible":"1"}]
        */
  componentDidMount() {
    // this.service.getOffersVisibleWithParams({ limit: 4 }).then(response => {
    //   console.log(response.data);
    //   this.setState({ offers: response.data });
    // });
  }

  render() {
    console.log(this.state.offers);
    return (
      <Grid container component="main" justify="center">
        <NavBar />
        <Header image="Home_Header.jpg" gradient="header-white">
          <Text variant="h1" color="#000" isBold>
            Vive la experiencia <br />
            de tu vida
          </Text>
          <Text variant="p1" color="#fff">
            La oportunidad de conseguir trabajo en los mejores hoteles y <br />
            restaurantes de Oriente Medio.
          </Text>
          <div
            style={{ display: "flex", flexFlow: "row wrap", marginTop: "16px" }}
          >
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
            {/* <Button
              variant="primary"
              width="189px"
              height="51px"
              isBold
              fontSize="12px"
              letterSpacing="2.4px"
              link="/offers"
              margin="0 0 0 16px"
            >
              OFERTAS
            </Button> */}
          </div>
        </Header>
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <Places
            places={this.state.places}
            widthButton="260px"
            heightButton="108px"
            letterSpacing="4px"
            fontSize="20px"
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <Facilities variant="home" />
        </Grid>
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
        {/* <Grid item xs={12} style={{ marginTop: "48px" }}>
          <Offers title="Ofertas" offers={this.state.offers} />
        </Grid> */}
        <Grid item xs={10} style={{ marginTop: "48px" }}>
          <Grid container>
            <Grid item xs={12}>
              <Text variant="h2" margin="0px 0px 46px" textAlign="center">
                ¿Por qué Middle East?
              </Text>
            </Grid>
            <Grid item xs={12} md={6}>
              <Text variant="p3" lineHeight="26px" margin="0px 0px 95px">
                Oriente Medio representa los más altos estándares de servicio en
                hospitality en todo el mundo. Su inversión en turismo acelera su
                rápido desarrollo en todos los aspectos. Sus países, cada vez
                más liberales, se abren al mundo permitiendo la llegada de
                millones de visitantes. La arena blanca interminable y los mares
                color turquesa con sus vistas únicas y atracciones de fama
                mundial, son las razones por las que se construyen cada vez más
                cadenas hoteleras de fama internacional.
              </Text>
              {/* <Button
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
            </Button> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <Imagen
                width="100%"
                height="400px"
                borderRadius="8px"
                url="Porque_ME.jpg"
                isBackground
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
