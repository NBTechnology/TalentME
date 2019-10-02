import React from "react";
import Button from "components/Atoms/Button/Button";

const FooterCard = props => {
  let content;
  switch (props.variant) {
    case "cardOffer":
      content = (
        <div className="bodyCardOffer">
          <Button
            variant="secondary"
            width="202px"
            height="47px"
            btnBorder="1px solid #D2D2D2"
            onClick={() => props.selectOffer(props.idOffer)}
          >
            Inscribeme
          </Button>
        </div>
      );
      break;

    default:
      content = (
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
      break;
  }
  return content;
};

export default FooterCard;
