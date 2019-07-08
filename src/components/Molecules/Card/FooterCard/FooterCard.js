import React from "react";
import Button from "components/Atoms/Button/Button";

const FooterCard = props => {
  return (
    <div className="bodyCardOffer">
      <Button
        variant="secondary"
        width="202px"
        height="47px"
        btnBorder="1px solid #D2D2D2"
      >
        Inscribeme
      </Button>
    </div>
  );
};

export default FooterCard;
