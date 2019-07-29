import React from "react";
import Button from "components/Atoms/Button/Button";
import Text from "components/Atoms/Text/Text";
import "./HeaderCard.css";
import Imagen from "components/Atoms/Imagen/Imagen";

const HeaderCard = props => {
  let content;
  switch (props.variant) {
    case "cardOffer":
      content = (
        <div className="headerCardOffer">
          <div className="headerCardContentOffer">
            <div>
              <Text weight fontSize={props.sizeTitle}>
                {props.title}
              </Text>
              <Text fontSize={props.sizeSubtitle} padding="8px 0px 0px 0px">
                {props.subtitle}
              </Text>
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
      break;
    case "cardFacility":
      content = (
        <div className="headerCardFacilities">
          <Imagen width="80px" height="80px" url={props.url} />
          <Text variant="p1" margin="18px 0 0 0">
            {props.title}
          </Text>
        </div>
      );
      break;
    case "cardCarrousel":
      content = (
        <div className="headerCardCarrousel">
          <Imagen
            width="60px"
            height="60px"
            isBackground
            isCircle
            url={props.url}
          />
          <Text variant="p1" margin="18px 0 0 0">
            {props.title}
          </Text>
        </div>
      );
      break;
    default:
      content = (
        <div className="headerCardOffer">
          <div className="headerCardContentOffer">
            <div>
              <Text weight fontSize={props.sizeTitle}>
                {props.title}
              </Text>
              <Text fontSize={props.sizeSubtitle} padding="8px 0px 0px 0px">
                {props.subtitle}
              </Text>
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
      break;
  }

  return content;
};

export default HeaderCard;
