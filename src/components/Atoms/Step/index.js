import React from "react";
import Imagen from "components/Atoms/Imagen/Imagen";
import Text from "components/Atoms/Text/Text";

//TYPE Sin nada: horizontal con textos debajo. Inline: horizontal textos a la derecha. Vertical: vertical con textos a la derecha
// PROPS -> Data(title, img), Type

const Step = props => {
  return (
    <div className="Stepper__step">
      <div className="Stepper__img">
        <Imagen width={80 + "px"} height={80 + "px"} url={props.image} />
      </div>
      <div className="Stepper__indicator">
        <span className="Stepper__info">{props.index}</span>
      </div>
      <div className="Stepper__label">
        <Text
          variant={window.innerWidth < 600 ? "customize" : "p1"}
          // letterSpacing={"3px"}
          color={"#212121"}
          fontSize="12px"
          weight={window.innerWidth < 600 ? true : false}
        >
          {props.title}
        </Text>
      </div>
      {/* <div className="Stepper__panel">
            {props.children}
        </div> */}
    </div>
  );
};

export default Step;
