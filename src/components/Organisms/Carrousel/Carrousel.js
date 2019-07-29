import React from "react";
import "./Carrousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";


const Carrousel = props => {
    //console.log(this.props.settings);ç
    const content = <Slider {...props.settings}>
        <div>
            <div className="slide-2">
                <Card variant={"cardCarrousel"} title="Mark Holden" text="A major turning point in the history of early philosophical science was the controversial" url="Destino_Doha_Trabaja.jpg" />
                <Card variant={"cardCarrousel"} title="Mark Holden" text="A major turning point in the history of early philosophical science was the controversial" url="Destino_Doha_Trabaja.jpg" />
                <Card variant={"cardCarrousel"} title="Mark Holden" text="A major turning point in the history of early philosophical science was the controversial" url="Destino_Doha_Trabaja.jpg" />
            </div>
        </div>
        <div className="slide-0"><h3>Graph 2</h3></div>
        <div className="slide-1"><h3>Graph 3</h3></div>
        <div className="slide-3"><h3>Set Up</h3></div>
    </Slider >

    return content;
}




export default Carrousel;