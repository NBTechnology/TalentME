import React from "react";
import Button from "components/Atoms/Button/Button";

const Places = props => {
  const places = props.places.map(place => {
    return (
      <div key={place.id} style={{ marginRight: "16px" }}>
        <Button
          variant="image"
          isGradient
          width={props.widthButton}
          height={props.heightButton}
          bg={place.image}
          isBold
          letterSpacing={props.letterSpacingButton}
          fontSize={props.fontSizeButton}
        >
          {place.label}
        </Button>
      </div>
    );
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "48px"
      }}
    >
      {places}
    </div>
  );
};

export default Places;
