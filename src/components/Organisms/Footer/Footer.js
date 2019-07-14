import React from "react";
import List from "components/Molecules/List/List";
import Imagen from "components/Atoms/Imagen/Imagen";
import Text from "components/Atoms/Text/Text";

const Footer = props => {
  return (
    <div style={{ background: " #2C2C2C", paddingTop: "78px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "70%",
          marginLeft: "15%"
        }}
      >
        <List title="TalentMe" items={["Nosotros", "Contacto"]} />
        <List title="Ofertas" items={["Dubai", "Doha", "Abu Dhabi"]} />
        <List
          title="TalentMe"
          items={["Como funciona", "FAQ", "¿Por qué Middle East?"]}
        />
        <div>
          <List title="Nuestras Redes" items={[]} />
        </div>
      </div>
      <hr
        style={{
          border: "1px solid #FFFFFF",
          margin: "67.5px 90px 0 90px"
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "70%",
          marginLeft: "15%",
          alignItems: "center",
          padding: "16px"
        }}
      >
        <Imagen url="oficial_talentme_white.png" width="206px" height="38px" />
        <Text
          variant="customize"
          isBold
          fontSize="12px"
          color="#fff"
          letterSpacing="2.4px"
        >
          PRIVATE POLICY
        </Text>
        <Text
          variant="customize"
          isBold
          fontSize="12px"
          color="#fff"
          letterSpacing="2.4px"
        >
          TERMS & CONDITIONS
        </Text>
        <Text
          variant="customize"
          isBold
          fontSize="12px"
          color="#fff"
          letterSpacing="2.4px"
        >
          COPYRIGHT NOTIFICATIONS
        </Text>
      </div>
    </div>
  );
};

export default Footer;
