import React from "react";
import Button from "components/Atoms/Button/Button";
import Text from "components/Atoms/Text/Text";

const HeaderCard = props => {
  return (
    <div className="headerCard">
      <div className="textHeadercard">
        <Text weight fontSize="14px">
          Camarero
        </Text>
        <Text fontSize="12px">Marriot Dubai</Text>
      </div>
      <Button
        type="image"
        width="85px"
        height="37px"
        bg="Boton_DUBAI.jpg"
        isBold
        letterSpacing="2.4px"
        fontSize="12px"
      >
        DUBAI
      </Button>
    </div>
  );
};

export default HeaderCard;
