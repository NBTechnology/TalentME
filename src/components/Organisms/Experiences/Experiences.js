import React from "react";

import Carrousel from "../Carrousel/Carrousel";
import Text from "components/Atoms/Text/Text";
import Imagen from "components/Atoms/Imagen/Imagen";

const Experiences = props => {
  //console.log(this.props.settings);
  const content = (
    <Imagen
      isBackground
      url="Home_Header.jpg"
      width="100%"
      height="580px"
      position="relative"
      top="48px"
      isGradient="white"
      style={{ backgroundColor: "red", height: "601px" }}
    >
      <div
        style={{ textAlign: "center", marginBottom: "40px", paddingTop: "1px" }}
      >
        <Text variant="h2">Los que ya han ido</Text>
        <Text variant="p2">
          Más de 140 personas han disfrutado con éxito esta experiencia
        </Text>
      </div>
      <div style={{ width: "60%", marginLeft: "20%" }}>
        <Carrousel
          settings={{
            dots: true,
            infinite: true,
            draggable: true,
            speed: 500,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dotsClass: "slick-dots-c"
          }}
          iterator={3}
          data={[
            {
              id: 0,
              title: "Mark Holden",
              text:
                "A major turning point in the history of early philosophical science was the controversial",
              url: "Destino_Doha_Trabaja.jpg"
            },
            {
              id: 1,
              title: "Mark Holden",
              text:
                "A major turning point in the history of early philosophical science was the controversial",
              url: "Destino_Doha_Trabaja.jpg"
            },
            {
              id: 2,
              title: "Mark Holden",
              text:
                "A major turning point in the history of early philosophical science was the controversial",
              url: "Destino_Doha_Trabaja.jpg"
            },
            {
              id: 3,
              title: "Mark Holden",
              text:
                "A major turning point in the history of early philosophical science was the controversial",
              url: "Destino_Doha_Trabaja.jpg"
            },
            {
              id: 4,
              title: "Mark Holden",
              text:
                "A major turning point in the history of early philosophical science was the controversial",
              url: "Destino_Doha_Trabaja.jpg"
            },
            {
              id: 5,
              title: "Mark Holden",
              text:
                "A major turning point in the history of early philosophical science was the controversial",
              url: "Destino_Doha_Trabaja.jpg"
            },
            {
              id: 6,
              title: "Mark Holden",
              text:
                "A major turning point in the history of early philosophical science was the controversial",
              url: "Destino_Doha_Trabaja.jpg"
            },
            {
              id: 7,
              title: "Mark Holden",
              text:
                "A major turning point in the history of early philosophical science was the controversial",
              url: "Destino_Doha_Trabaja.jpg"
            },
            {
              id: 8,
              title: "Mark Holden",
              text:
                "A major turning point in the history of early philosophical science was the controversial",
              url: "Destino_Doha_Trabaja.jpg"
            }
          ]}
        />
      </div>
    </Imagen>
  );
  return content;
};

export default Experiences;
