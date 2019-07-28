import React from "react";
import Card from "components/Organisms/Card/Card";
import Text from "components/Atoms/Text/Text";

const Offers = props => {
  const offers = props.offers.map(offer => {
    return (
      <Card
        key={offer.id}
        title={offer.title}
        subTitle={offer.subTitle}
        imageButton={offer.image}
        labelButton={offer.label}
        variant="cardOffer"
        infoOffer={offer.infoOffer}
      />
    );
  });
  return (
    <div
      style={{
        position: "relative",
        top: "48px",
        width: "80%",
        marginLeft: "10%"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Text variant="h2">{props.title}</Text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        {offers}
      </div>
    </div>
  );
};

export default Offers;
