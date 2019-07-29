import React from "react";
import Text from "components/Atoms/Text/Text";

import "./BodyCard.css";

const BodyCard = props => {
  let content;
  switch (props.variant) {
    case "cardOffer":
      content = (
        <div className="bodyCardOffer" style={{ flex: "1 1 auto" }}>
          <Text variant="p3" padding="15.5px 0px 0px 0px">
            {props.text}
          </Text>
        </div>
      );
      break;
    case "cardCarrousel":
      content = (
        <div className="bodyCardCarrousel" style={{ flex: "1 1 auto" }}>
          <Text variant="p3" padding="0px 0px 0px 0px">
            {props.text}
          </Text>
        </div>
      );
      break;
    default:
      content = (
        <div className="bodyCardOffer" style={{ flex: "1 1 auto" }}>
          <Text variant="p3" padding="15.5px 0px 0px 0px">
            {props.text}
          </Text>
        </div>
      );
      break;
  }
  return content;
};

export default BodyCard;
