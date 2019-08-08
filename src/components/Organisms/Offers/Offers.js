import React from "react";
import Card from "components/Organisms/Card/Card";
import Text from "components/Atoms/Text/Text";
import { Grid } from "@material-ui/core";
import Button from "components/Atoms/Button/Button";

const Offers = props => {
  const offers = props.offers.map(offer => {
    return (
      <Grid item xs={12} sm={6} md={3} key={offer.id}>
        <Card
          title={offer.position}
          subTitle={offer.subTitle}
          imageButton={offer.image}
          labelButton={offer.place}
          variant="cardOffer"
          infoOffer={offer.infoOffer}
        />
      </Grid>
    );
  });
  return (
    <Grid container justify="center">
      {/* <div
      style={{
        position: "relative",
        top: "48px",
        width: "80%",
        marginLeft: "10%"
      }}
    > */}
      <Grid item xs={12}>
        <div style={{ textAlign: "center" }}>
          <Text variant="h2">{props.title}</Text>
        </div>
      </Grid>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      > */}
      <Grid container spacing={4}>
        {offers}
      </Grid>
      {/* </div> */}
      {/* </div> */}
      <Grid item xs={12} md={props.labelButton ? 6:3} style={{ marginTop: "60px" }}>
        <Button
          variant="primary"
          height="51px"
          fontSize="16px"
          isBold
          letterSpacing="3.2px"
        >
          {props.labelButton || "TODAS LAS OFERTAS"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Offers;
