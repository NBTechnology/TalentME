import React from "react";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";

const RightNavBar = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Text
        variant="customize"
        fontSize="12px"
        letterSpacing="2.88px"
        margin="0px 23px 0px 0px"
      >
        DESTINOS
      </Text>
      <Text
        variant="customize"
        fontSize="12px"
        letterSpacing="2.88px"
        margin="0px 23px 0px 0px"
      >
        COMO FUNCIONA
      </Text>
      <Text
        variant="customize"
        fontSize="12px"
        letterSpacing="2.88px"
        margin="0px 23px 0px 0px"
      >
        NOSOTROS
      </Text>
      <Text
        variant="customize"
        fontSize="12px"
        letterSpacing="2.88px"
        margin="0px 23px 0px 0px"
      >
        CONTACTO
      </Text>
      <Text
        variant="customize"
        fontSize="12px"
        letterSpacing="2.88px"
        margin="0px 31px 0px 0px"
      >
        OFERTAS
      </Text>
      <Button
        variant="primary"
        width="127px"
        height="38px"
        isBold
        fontSize="12px"
        letterSpacing="2.4px"
        margin="0px 96px 0 0"
      >
        INSCRIBIRSE
      </Button>
    </div>
  );
};

export default RightNavBar;
