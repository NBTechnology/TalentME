import React, { Component } from "react";
import EasyStepsWork from "components/Organisms/EasyStepsWork";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Facilities from "components/Organisms/Facilities/Facilities";
import { Grid } from "@material-ui/core";
import Footer from "components/Organisms/Footer/Footer";

class ComoFunciona extends Component {
  render() {
    return (
      <Grid container component="main">
        {/* <NavBar /> */}
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
          <EasyStepsWork />
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default ComoFunciona;
