import React from "react";
import HeaderCard from "components/Molecules/Card/HeaderCard/HeaderCard";
import BodyCard from "components/Molecules/Card/BodyCard/BodyCard";
import FooterCard from "components/Molecules/Card/FooterCard/FooterCard";
import "./Card.css";
const Card = props => {
  return (
    <div className="cardOffer">
      <HeaderCard
        widthButton="85px"
        heightButton="37px"
        sizeTitle="14px"
        title="Camarero"
        sizeSubtitle="12px"
        subtitle="W Doha"
        imageButton="Boton_DUBAI.jpg"
        letterSpacingButton="2.4px"
        fontSizeButton="12px"
        labelButton="DUBAI"
      />
      <BodyCard />
      <FooterCard />
    </div>
  );
};

export default Card;
