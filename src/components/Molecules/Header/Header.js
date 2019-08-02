import React from "react";
import Imagen from "components/Atoms/Imagen/Imagen";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";

const Header = props => {
  return (
    <Imagen
      backgroundPosition = {props.backgroundPosition}
      isBackground
      url={props.image}
      width="100%"
      height="580px"
      position="relative"
      top="0px"
      gradient={props.gradient}
    >
      <div
        style={{
          position: "absolute",
          bottom: "41px",
          left: "156px",
          width: "300px"
        }}
      >
        <Text variant="h1" color={props.titleColor} isBold>
          {props.title}
        </Text>
        {props.btnText && (<Button
          variant="primary"
          width="189px"
          height="51px"
          isBold
          fontSize="12px"
          letterSpacing="2.4px"
          link={props.link}
        >
          {props.btnText}
        </Button>
        )}
      </div>
    </Imagen>
  );
};

export default Header;
