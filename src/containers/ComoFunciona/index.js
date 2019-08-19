import React, { Component } from "react";
import EasyStepsWork from "components/Organisms/EasyStepsWork";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Facilities from "components/Organisms/Facilities/Facilities";
import { Grid } from "@material-ui/core";
import Footer from "components/Organisms/Footer/Footer";
import Text from "components/Atoms/Text/Text";

class ComoFunciona extends Component {
  render() {
    return (
      <Grid container component="main" justify="center">
        <NavBar />
        <Header
          image="ComoFunciona_Header.jpg"
          title="Un mundo por explorar"
          titleColor="#fff"
          gradient="header-white"
        />
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <Facilities variant="how_it_works" />
        </Grid>
        <Grid item xs={12} style={{ marginTop: "48px" }}>
          <div
            style={{
              background: "#F2F2F2",
              height: "133px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text variant="h2">EN 4 SENCILLOS PASOS</Text>
          </div>
        </Grid>
        <Grid item xs={10} style={{ marginTop: "20px" }}>
          <EasyStepsWork />
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default ComoFunciona;
