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
            title={props.job}
            sizeSubtitle="12px"
            subtitle={props.location}
            imageButton={props.image}
            letterSpacingButton="2.4px"
            fontSizeButton="12px"
            labelButton={props.name}
            key={props.key}
            variant="cardOffer"
          />
          <BodyCard variant="cardOffer" text={props.description} />
          <FooterCard
            variant="cardOffer"
            selectOffer={props.selectOffer}
            idOffer={props.idOffer}
          />
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
          <BodyCard text={props.text} variant="cardFacility" />
        </div>
      );
      break;
    case "cardRequisite":
      content = (
        <div className="cardRequisite">
          <HeaderCard
            title={props.title}
            url={props.url}
            variant={"cardRequisite"}
          />
          <BodyCard text={props.text} variant="cardRequisite" />
        </div>
      );
      break;
    case "cardCarrousel":
      content = (
        <div className="cardCarrousel">
          <HeaderCard
            title={props.title}
            url={props.url}
            variant={"cardCarrousel"}
          />
          <hr
            style={{
              marginLeft: "45%",
              width: "10%",
              display: "block",
              height: "2px",
              border: "0",
              borderTop: "2px solid #ffc80a",
              padding: "0"
            }}
          />
          <BodyCard variant="cardCarrousel" text={props.text} />
        </div>
      );
      break;
    case "cardWithoutBorder":
      content = (
        <div className="cardWithoutBorder">
          <HeaderCard
            title={props.title}
            url={props.url}
            variant={"cardWithoutBorder"}
          />
          <BodyCard variant="cardWithoutBorder" text={props.text} />
        </div>
      );
      break;
    case "cardWorkerHorizontal":
      content = (
        <div className="cardWorkerHorizontal">
          <HeaderCard
            url={props.url}
            variant={"cardWorkerHorizontal"}
            backgroundPosition={props.backgroundPosition}
          />
          <BodyCard
            variant="cardWorkerHorizontal"
            title={props.title}
            position={props.position}
            text={props.text}
          />
        </div>
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
          <FooterCard selectOffer={props.selectOffer} idOffer={props.idOffer} />
        </div>
      );
      break;
  }
  return content;
};

export default Card;
