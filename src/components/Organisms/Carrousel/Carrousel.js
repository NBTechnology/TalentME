import React from "react";
import "./Carrousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";


const Carrousel = props => {
    //console.log(this.props.settings);ç
    const content =
        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>

            <Slider {...props.settings}>
                <div>
                    <div className="carrousel-core">
                        <Card variant={"cardCarrousel"} title="Mark Holden" text="A major turning point in the history of early philosophical science was the controversial" url="Destino_Doha_Trabaja.jpg" />
                        <Card variant={"cardCarrousel"} title="Mark Holden" text="A major turning point in the history of early philosophical science was the controversial" url="Destino_Doha_Trabaja.jpg" />
                        <Card variant={"cardCarrousel"} title="Mark Holden" text="A major turning point in the history of early philosophical science was the controversial" url="Destino_Doha_Trabaja.jpg" />
                    </div>
                </div>
                <div>
                    <div className="carrousel-core">
                        <Card variant={"cardCarrousel"} title="Mark Holden" text="A major turning point in the history of early philosophical science was the controversial" url="Destino_Doha_Trabaja.jpg" />
                        <Card variant={"cardCarrousel"} title="Mark Holden" text="A major turning point in the history of early philosophical science was the controversial" url="Destino_Doha_Trabaja.jpg" />
                        <Card variant={"cardCarrousel"} title="Mark Holden" text="A major turning point in the history of early philosophical science was the controversial" url="Destino_Doha_Trabaja.jpg" />
                    </div>
                </div>
                <div>
                    <div className="carrousel-core">
                        <Card variant={"cardCarrousel"} title="Mark Holden" text="A major turning point in the history of early philosophical science was the controversial" url="Destino_Doha_Trabaja.jpg" />
                        <Card variant={"cardCarrousel"} title="Mark Holden" text="A major turning point in the history of early philosophical science was the controversial" url="Destino_Doha_Trabaja.jpg" />
                        <Card variant={"cardCarrousel"} title="Mark Holden" text="A major turning point in the history of early philosophical science was the controversial" url="Destino_Doha_Trabaja.jpg" />
                    </div>
                </div>
            </Slider >
        </div>

    return content;
}




export default Carrousel;