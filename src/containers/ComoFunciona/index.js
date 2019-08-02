import React, { Component } from "react";
import EasyStepsWork from "components/Organisms/EasyStepsWork";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Facilities from "components/Organisms/Facilities/Facilities";

class ComoFunciona extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header
          image="ComoFunciona_Header.jpg"
          title="Un mundo por explorar"
          titleColor="#fff"
          gradient="header-white"
        />
        <Facilities variant="how_it_works" />
        <EasyStepsWork />
      </div>
    );
  }
}

export default ComoFunciona;
