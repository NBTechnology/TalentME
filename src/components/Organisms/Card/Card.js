import React from "react";
import HeaderCard from "components/Molecules/Card/HeaderCard/HeaderCard";
import BodyCard from "components/Molecules/Card/BodyCard/BodyCard";
import FooterCard from "components/Molecules/Card/FooterCard/FooterCard";
import "./Card.css";
const Card = props => {
  let content;
  switch (props.variant) {
    case "cardOffer":
      content = (
        <div className="cardOffer">
          <HeaderCard
            widthButton="85px"
            heightButton="37px"
            sizeTitle="14px"
            title={props.title}
            sizeSubtitle="12px"
            subtitle={props.subTitle}
            imageButton={props.imageButton}
            letterSpacingButton="2.4px"
            fontSizeButton="12px"
            labelButton={props.labelButton}
            key={props.key}
            variant="cardOffer"
          />
          <BodyCard variant="cardOffer" text={props.infoOffer} />
          <FooterCard variant="cardOffer" />
        </div>
      );
      break;
    case "cardFacility":
      content = (
        <div className="cardFacility">
          <HeaderCard
            title={props.title}
            url={props.url}
            variant={"cardFacility"}
          />
          <BodyCard text={props.text} />
        </div>
      );
      break;
    case "cardCarrousel":
      content = (
        <div style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)"
        }} className="cardCarrousel" >
          <HeaderCard
            title={props.title
            }
            url={props.url}
            variant={"cardCarrousel"}
          />
          <hr style={{
            marginLeft: "45%",
            width: "10%", display: "block", height: "2px",
            border: "0", borderTop: "1px solid #ffc80a",
            padding: "0",
          }} />
          <BodyCard variant="cardCarrousel" text={props.text} />
        </div >
      );
      break;
    default:
      content = (
        <div className="cardOffer">
          <HeaderCard
            widthButton="85px"
            heightButton="37px"
            sizeTitle="14px"
            title={props.title}
            sizeSubtitle="12px"
            subtitle={props.subTitle}
            imageButton={props.imageButton}
            letterSpacingButton="2.4px"
            fontSizeButton="12px"
            labelButton={props.labelButton}
            key={props.key}
          />
          <BodyCard variant="cardOffer" text={props.infoOffer} />
          <FooterCard />
        </div>
      );
      break;
  }
  return content;
};

export default Card;
