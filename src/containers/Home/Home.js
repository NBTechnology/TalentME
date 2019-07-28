import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Places from "components/Organisms/Places/Places";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      </div>
    );
  }
}

export default Home;
