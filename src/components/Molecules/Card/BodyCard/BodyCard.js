import React from "react";
import Text from "components/Atoms/Text/Text";

import "./BodyCard.css";

const BodyCard = props => {
  return (
    <div className="bodyCardOffer" style={{ flex: "1 1 auto" }}>
      <Text variant="p3" padding="15.5px 0px 0px 0px">
        {props.text}
      </Text>
    </div>
  );
};

export default BodyCard;
