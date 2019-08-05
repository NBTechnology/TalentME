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
    case "cardRequisite":
      content = (
        <div
          className="bodyCardRequisite"
          style={{ flex: "1 1 auto", textAlign: "center", marginTop: "16px" }}
        >
          <Text variant="p3" padding="0px 0px 0px 0px">
            {props.text}
          </Text>
        </div>
      );
      break;
    case "cardFacility":
      content = (
        <div
          className="bodyCardFacility"
          style={{ flex: "1 1 auto", textAlign: "center", marginTop: "16px" }}
        >
          <Text variant="p3" padding="0px 0px 0px 0px">
            {props.text}
          </Text>
        </div>
      );
      break;
    case "cardWithoutBorder":
      content = (
        <div
          className="bodyCardWithoutBorder"
          style={{ flex: "1 1 auto", textAlign: "center", marginTop: "16px" }}
        >
          <Text variant="p3" padding="0px 0px 0px 0px">
            {props.text}
          </Text>
        </div>
      );
      break;

    case "cardWorkerHorizontal":
      content = (
        <div
          className="bodyCardWorkerHorizontal"
          style={{ flex: "1 1 auto", marginTop: "16px" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center"
            }}
          >
            <Text variant="p1">{props.title}</Text>
            <Text variant="customize" padding="0 16px" weight color="#9FA3A7">
              {props.position}
            </Text>
          </div>
          <Text variant="p3" padding="8px 0px 0px 0px">
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
