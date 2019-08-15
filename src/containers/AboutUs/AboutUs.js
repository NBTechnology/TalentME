import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Text from "components/Atoms/Text/Text";
import Facilities from "components/Organisms/Facilities/Facilities";
import Footer from "components/Organisms/Footer/Footer";
import Imagen from "components/Atoms/Imagen/Imagen";
import CardsAboutUs from "components/Organisms/CardsAboutUs";
import Card from "components/Organisms/Card/Card";
import { Grid } from "@material-ui/core";
class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workers: [
        {
          title: "ELEONORA DELL’AMICO",
          position: "",
          url: "TeamMates/Eleonora.jpg",
          text:
            "Lo que me gusta de trabajar en Talent ME es dar la oportunidad a las personas de vivir una experiencia única fuera de su zona de confort. Somos cercanos, jovenes comprometidos y siempre disponibles. Los cambios asustan pero siempre son positivos y Talent Me te ofrece la posibilidad de dar el gran salto."
        },
        {
          title: "CARLOS GALAYO",
          position: "",
          url: "TeamMates/Eleonora.jpg",
          backgroundPosition: "top center",
          text:
            "TLa gente que piensa que es un simple trabajo se equivoca. En Talent ME ofrecemos oportunidades no solo profesionales, si no oportunidades que cambiarán tu vida. Necesitas estar mentalizado del cambio, pero una vez lo estés, prepárate para conocer gente maravillosa, aprender y viajar a lugares que nunca hubieras imaginado."
        },
        {
          title: "ISABEL",
          position: "",
          url: "TeamMates/TME_Isabel.jpg",
          text:
            "The like button was first announced as a FriendFeed feature on October 30, 2007 and was popularized within its community. Later on the feature was integrated to Facebook before eventually FriendFeed was acquired by Facebook August 10, 2009"
        },
        {
          title: "JAVI TIRADO",
          position: "",
          url: "TeamMates/Eleonora.jpg",
          text:
            "Una vez conoces al candidato ideal, sabes que el hotel va a quererle en su equipo con toda seguridad. Es un placer ver como el hotel y el candidato salen encantados de esta experiencia."
        }
      ]
    };
  }

  render() {
    return (
      <Grid container component="main">
        <NavBar />
        <Header image="AboutUs_Header.jpeg" gradient="header-white" />
        <div style={{ width: "60%", marginLeft: "20%", marginTop: "39px" }}>
          <Text
            variant="custom"
            fontSize="22px"
            lineHeight="25px"
            textAlign="center"
          >
            Talent Me es una agencia de reclutamiento española que ofrece la oportunidad 
            de trabajar en Oriente Medio en hoteles y restaurantes premium a jóvenes que 
            buscan un nuevo reto en su carrera profesional.
          </Text>
        </div>
        <CardsAboutUs />
        <Grid item xs={12} style={{ background: "#F2F2F2" }}>
          <Grid container justify="center">
            <Grid item xs={12} md={8}>
              <Card variant="cardWorkerHorizontal" {...this.state.workers[0]} />
            </Grid>
            <Grid item xs={0} md={12} />
            <Grid item xs={12} md={8}>
              <Card variant="cardWorkerHorizontal" {...this.state.workers[1]} />
            </Grid>
            <Grid item xs={0} md={12} />
            <Grid item xs={12} md={8}>
              <Card variant="cardWorkerHorizontal" {...this.state.workers[2]} />
            </Grid>
            <Grid item xs={0} md={12} />
            <Grid item xs={12} md={8}>
              <Card variant="cardWorkerHorizontal" {...this.state.workers[3]} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Text variant="h2" color="#212121" textAlign="center">
            Colaboradores
          </Text>
          <Text
            variant="custom"
            color="#000000"
            fontSize="22px"
            lineHeight="26px"
            textAlign="center"
          >
            Algunas de las cadenas hoteleras con las que colaboramos
          </Text>
          <div
            style={{
              width: "80%",
              marginLeft: "10%",
              marginTop: "48px",
              marginBottom: "64px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Imagen
                  style={{ width: "30%" }}
                  url="Collaborators/kempinski.png"
                  width="290px"
                  height="114px"
                />
              </div>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Imagen
                  style={{ width: "30%" }}
                  url="Collaborators/jumeirah.png"
                  width="290px"
                  height="160px"
                />
              </div>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Imagen
                  style={{ width: "30%" }}
                  url="Collaborators/marriot.png"
                  width="290px"
                  height="150px"
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Imagen
                  style={{ width: "30%" }}
                  url="Collaborators/the_ritz.png"
                  width="204px"
                  height="142px"
                />
              </div>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Imagen
                  style={{ width: "30%" }}
                  url="Collaborators/atlantis.jpg"
                  width="325px"
                  height="81px"
                />
              </div>
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Imagen
                  style={{ width: "30%" }}
                  url="Collaborators/Sheraton_Hotel_Dubai_logo.png"
                  width="170px"
                  height="142px"
                />
              </div>
            </div>
          </div>
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default AboutUs;
