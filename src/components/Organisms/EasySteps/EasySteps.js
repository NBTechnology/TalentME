import React from "react";
import Stepper from "components/Molecules/Stepper";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";
import Imagen from "components/Atoms/Imagen/Imagen";

const EasySteps = props => {
  const contain = (
    <div style={{ textAlign: "center", top: "48px", position: "relative" }}>
      <Text variant="h2" weight>
        4 sencillos pasos
      </Text>
      <div style={{ width: "60%", marginLeft: "20%" }}>
        <Stepper type={props.type} data={props.data} />
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          zIndex: "2",
          marginTop: "-70px"
        }}
      >
        <Imagen
          style={{ zIndex: "2", opacity: "0.65", filter: "alpha(opacity=50)" }}
          url="Home_4Sencillospasos.jpg"
          height="216px"
          width="100%"
          isBackground
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              zIndex: "2",
              marginTop: "124px"
            }}
          >
            <Button
              style={{ zIndex: "1" }}
              width="188px"
              height="51px"
              isBold
              letterSpacing="3.2px"
              link="/inscribirse"
            >
              INSCRIBIRSE
            </Button>
          </div>
        </Imagen>
      </div>
    </div>
  );
  return contain;
};

export default EasySteps;
