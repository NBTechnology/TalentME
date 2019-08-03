import React from "react";
import Text from "components/Atoms/Text/Text";
import Imagen from "components/Atoms/Imagen/Imagen";

const EasyStepWork = props => {
  const path = require("assets/img/icons/step" + props.number + ".png");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "80px"
      }}
    >
      <Imagen
        width="400px"
        height="400px"
        borderRadius="8px"
        url={"ComoFunciona" + props.number + ".jpg"}
        isBackground
        float="left"
        sizeImage="150%"
        bac
      />
      <div
        style={{
          background: " url('" + path + "') " + props.position + " no-repeat",
          backgroundSize: "40%",
          order: props.number % 2 === 0 ? -1 : 0,
          height: "400px",
          width: "400px",
          paddingLeft: "30px",
          paddingRight: "30px"
        }}
      >
        <Text variant="p1">{props.title}</Text>
        <Text variant="p3" margin="16px 0 0 0">
          {props.text}
        </Text>
      </div>
    </div>
  );
};

export default EasyStepWork;
