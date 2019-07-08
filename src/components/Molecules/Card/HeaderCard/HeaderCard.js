import React from "react";
import Button from "components/Atoms/Button/Button";
import Text from "components/Atoms/Text/Text";
import "./HeaderCard.css";

const HeaderCard = props => {
  return (
    <div className="headerCardOffer">
      <div className="headerCardContentOffer">
        <div >
          <Text weight fontSize={props.sizeTitle}>
            {props.title}
          </Text>
          <Text fontSize={props.sizeSubtitle} padding="8px 0px 0px 0px">{props.subtitle}</Text>
        </div>
        <Button
          variant="image"
          isGradient
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
      <hr />
    </div>
  );
};

export default HeaderCard;
