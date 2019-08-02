import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Button from "components/Atoms/Button/Button";
import Imagen from "components/Atoms/Imagen/Imagen";
import Text from "components/Atoms/Text/Text";
import Footer from "components/Organisms/Footer/Footer";

class ContactUs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavBar />
                <Header image="Contacto_Header.jpg" gradient="header-white" backgroundPosition = "bottom" />
            </div>
        )
    }
}

export default ContactUs;

