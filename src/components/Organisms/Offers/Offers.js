import React from "react";
import Card from "components/Organisms/Card/Card";
import Text from "components/Atoms/Text/Text";

const Offers = props => {
  const offers = props.offers.map(offer => {
    return (
      <Card
        key={offer.key}
        title={offer.title}
        subTitle={offer.subTitle}
        imageButton={props.image}
        labelButton={props.label}
      />
    );
  });
  return (
    <div style={{ textAlign: "center" }}>
      <Text variant="h2">{props.title}</Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space.between"
        }}
      >
        {offers}
      </div>
    </div>
  );
};

export default Offers;
