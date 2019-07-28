import React from "react";
import Card from "components/Organisms/Card/Card";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";

const Facilities = props => {
  const facilities = [
    {
      id: "facility0",
      title: "SIN PAGAR NADA",
      url: "icons/Home_Free.eps",
      text:
        "No tendrás que pagarnos absolutamente nada en ningún momento. Nuestra misión será que crezcas tanto personal como profesionalmente."
    },
    {
      id: "facility1",
      title: "ASESORAMIENTO",
      url: "icons/Home_Asesoramiento.eps",
      text:
        "Gestionamos contigo todo el papeleo necesario para trabajar y vivir en Oriente Medio. Te asesoramos en todas las posibles dudas que conlleva este gran cambio."
    },
    {
      id: "facility2",
      title: "PACK BENEFICIOS",
      url: "icons/Home_Beneficios.eps",
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
        <Text variant="h2">Con todas las facilidades incluidas</Text>
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
        <Button variant="primary" width="220px" height="51px" isBold>
          COMO FUNCIONA
        </Button>
      </div>
    </div>
  );
};

export default Facilities;
