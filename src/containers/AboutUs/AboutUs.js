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
          title: "Carlos Galayo",
          position: "CEO",
          url: "ComoFunciona_Header.jpg",
          text:
            "The like button was first announced as a FriendFeed feature on October 30, 2007 and was popularized within its community. Later on the feature was integrated to Facebook before eventually FriendFeed was acquired by Facebook August 10, 2009"
        },
        {
          title: "Eleonora",
          position: "Recruiting Manager",
          url: "TeamMates/Eleonora.jpg",
          backgroundPosition: "top center",
          text:
            "The like button was first announced as a FriendFeed feature on October 30, 2007 and was popularized within its community. Later on the feature was integrated to Facebook before eventually FriendFeed was acquired by Facebook August 10, 2009"
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
            Talent Me es una empresa española de carácter internacional que
            ofrece la oportunidad de trabajar en Oriente Medio en el sector
            hospitality a jóvenes que buscan un nuevo reto en su carrera
            profesional.
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
            Los hoteles con los que trabajamos tienen mínimo 5 estrellas
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
