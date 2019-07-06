import React from "react";
import Button from "components/Atoms/Button/Button";
import Text from "components/Atoms/Text/Text";
import "./HeaderCard.css";

const HeaderCard = props => {
  return (
    <div className="headerCard">
      <div className="textHeadercard">
        <Text weight fontSize={props.sizeTitle}>
          {props.title}
        </Text>
        <Text fontSize={props.sizeSubtitle}>{props.subtitle}</Text>
      </div>
      <Button
        type="image"
        width={props.widthButton}
        height={props.heightButton}
        bg={props.imageButton}
        isBold
        letterSpacing={props.letterSpacingButton}
        fontSize={props.fontSizeButton}
      >
        {props.labelButton}
      </Button>
    </div>
  );
};

export default HeaderCard;
