import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Text from "components/Atoms/Text/Text";
import Facilities from "components/Organisms/Facilities/Facilities";
import Footer from "components/Organisms/Footer/Footer";
import Imagen from "components/Atoms/Imagen/Imagen";

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
            <div style={{height:"628px", background:"#F2F2F2"}}></div>
            <div>
                <Text variant="h2" color="#212121" textAlign="center">
                    Colaboradores
                </Text>
                <Text variant="custom" color="#000000" fontSize="22px" lineHeight="26px" textAlign="center">
                    Los hoteles con los que trabajamos tienen mínimo 5 estrellas
                </Text>
                <div style={{width:"80%", marginLeft:"10%", marginTop:"48px", marginBottom:"64px"}}>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div style={{width:"30%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Imagen style={{width:"30%"}} url="Collaborators/kempinski.png" width="290px" height="114px"></Imagen>
                        </div>
                        <div style={{width:"30%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                          <Imagen style={{width:"30%"}} url="Collaborators/jumeirah.png" width="290px" height="160px"></Imagen>
                        </div>
                        <div style={{width:"30%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <Imagen style={{width:"30%"}} url="Collaborators/marriot.png" width="290px" height="150px"></Imagen>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div style={{width:"30%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <Imagen style={{width:"30%"}} url="Collaborators/the_ritz.png" width="204px" height="142px"></Imagen>
                        </div>
                        <div style={{width:"30%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <Imagen style={{width:"30%"}} url="Collaborators/atlantis.jpg" width="325px" height="81px"></Imagen>
                        </div>
                        <div style={{width:"30%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <Imagen style={{width:"30%"}} url="Collaborators/Sheraton_Hotel_Dubai_logo.png" width="170px" height="142px"></Imagen>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            </div>
        )
    }
}

export default AboutUs;
