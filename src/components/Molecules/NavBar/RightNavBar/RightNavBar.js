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
      <Text variant="p3">DESTINOS</Text>
      <Text variant="p3">COMO FUNCIONA</Text>
      <Text variant="p3">NOSOTROS</Text>
      <Text variant="p3">CONTACTO</Text>
      <Text variant="p3">OFERTAS</Text>
      <Button
        variant="primary"
        width="127px"
        height="38px"
        isBold
        fontSize="12px"
        letterSpacing="2.4px"
      >
        INSCRIBIRSE
      </Button>
    </div>
  );
};

export default RightNavBar;
