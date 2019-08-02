import React from "react";
import Card from "components/Organisms/Card/Card";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";

const Facilities = props => {
  const facilities = [
    {
      id: "facility0",
      title: "SIN PAGAR NADA",
      url: "icons/Home_Free.svg",
      text:
        "No tendrás que pagarnos absolutamente nada en ningún momento. Nuestra misión será que crezcas tanto personal como profesionalmente."
    },
    {
      id: "facility1",
      title: "ASESORAMIENTO",
      url: "icons/Home_Asesoramiento.svg",
      text:
        "Gestionamos contigo todo el papeleo necesario para trabajar y vivir en Oriente Medio. Te asesoramos en todas las posibles dudas que conlleva este gran cambio."
    },
    {
      id: "facility2",
      title: "PACK BENEFICIOS",
      url: "icons/Home_Beneficios.svg",
      text:
        "Vuelo a destino, alojamiento y comida incluidos. También gozarás de transporte gratuito y grandes descuentos. Y por supuesto, un salario mensual."
    }
  ];
  const contentFacilities = facilities.map(facility => {
    return (
      <Card
        variant="cardFacility"
        key={facility.id}
        title={facility.title}
        url={facility.url}
        text={facility.text}
      />
    );
  });

  let title, subTitle, finalButton;
  switch (props.variant) {
    case "how_it_works":
      title = "Cómo funciona";
      subTitle =
        "En las ofertas se incluyen todas las facilidades, sin pagar nada.";
      break;
    case "home":
      title = "Con todas las facilidades incluidas";
      finalButton = (
        <Button variant="primary" width="220px" height="51px" isBold>
          COMO FUNCIONA
        </Button>
      );
      break;
    default:
      title = "Con todas las facilidades incluidas";
      finalButton = (
        <Button variant="primary" width="220px" height="51px" isBold>
          COMO FUNCIONA
        </Button>
      );
      break;
  }
  return (
    <div
      style={{
        position: "relative",
        top: "48px",
        width: "80%",
        marginLeft: "10%",
        marginBottom: "48px"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Text variant="h2">{title}</Text>
        {subTitle && <Text variant="p1" margin="0 0 32px 0">{subTitle}</Text>}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        {contentFacilities}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}
      >
        {finalButton}
      </div>
    </div>
  );
};

export default Facilities;
