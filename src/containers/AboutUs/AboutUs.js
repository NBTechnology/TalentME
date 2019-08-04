import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Text from "components/Atoms/Text/Text";
import Facilities from "components/Organisms/Facilities/Facilities";
import Footer from "components/Organisms/Footer/Footer";

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <NavBar />
                <Header image="AboutUs_Header.jpeg" gradient="header-white"  />
                <div style={{width:"60%", marginLeft:"20%", marginTop:"39px"}}>
                    <Text variant="custom" fontSize="22px" lineHeight="25px" textAlign="center">
                        Talent Me es una empresa española de carácter internacional que ofrece la 
                        oportunidad de trabajar en Oriente Medio en el sector hospitality a jóvenes 
                        que buscan un nuevo reto en su carrera profesional.
                    </Text>
            </div>
            <Facilities variant="home" />
            <Footer></Footer>
            </div>
        )
    }
}

export default AboutUs;
