import React from "react";
import Card from "components/Organisms/Card/Card";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";
import { Grid } from "@material-ui/core";

const CardsAboutUs = props => {
  const items = [
    {
      id: "about0",
      title: "EXPERIENCIA A TU CV",
      url: "icons/Icon_CV.svg",
      text:
        "Una experiencia en un hotel 5* del extranjero aportará mucho valor a tu CV, ¡ aprovechalo !"
    },
    {
      id: "about1",
      title: "ÁBRETE AL MUNDO",
      url: "icons/Icon_Map.svg",
      text:
        "Conocerás una nueva cultura y gente maravillosa. Tendrás la oportunidad de viajar a sitios increíbles."
    },
    {
      id: "about2",
      title: "MEJORAS EL INGLÉS",
      url: "icons/Icon_English.svg",
      text:
        "Será tu idioma oficial. Trabajarás y vivirás hablando en inglés con compañeros y huespedes."
    }
  ];
  const contentItems = items.map(item => {
    return (
      <Grid item xs={8} md={4}>
        <Card
          variant="cardWithoutBorder"
          key={item.id}
          title={item.title}
          url={item.url}
          text={item.text}
        />
      </Grid>
    );
  });

  let title, subTitle, finalButton;
  switch (props.variant) {
    case "home":
      title = "Con todas las facilidades incluidas";
      finalButton = (
        <Button variant="primary" height="51px" isBold>
          COMO FUNCIONA
        </Button>
      );
      break;
    default:
      break;
  }
  return (
    <Grid container justify="center">
      {title && (
        <Grid item xs={10} style={{ textAlign: "center" }}>
          <Text variant="h2">{title}</Text>
        </Grid>
      )}
      {subTitle && (
        <Text variant="p1" margin="0 0 32px 0">
          {subTitle}
        </Text>
      )}
      <Grid container xs={10} spacing={3} justify="center">
        {contentItems}
      </Grid>
      <Grid item xs={6} md={3} justify="center" style={{ marginTop: "24px" }}>
        {finalButton}
      </Grid>
    </Grid>
  );
};

export default CardsAboutUs;
