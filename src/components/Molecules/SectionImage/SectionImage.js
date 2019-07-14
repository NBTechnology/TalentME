import React from "react";
import Imagen from "components/Atoms/Imagen/Imagen";
import Text from "components/Atoms/Text/Text";

const SectionImage = props => {
  return (
    <Imagen
      isBackground
      url="Destino_Testimonial.jpg"
      width="100%"
      height="386px"
      position="relative"
      top="48px"
      isGradient
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "70%",
          marginLeft: "15%"
        }}
      >
        <Imagen
          isBackground
          isCircle
          url="Inscribirse_Header.jpg"
          width="100px"
          height="100px"
        />
        <Text variant="customize" color="#fff" margin="29px 0 0 0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Text variant="customize" color="#fff" margin="39px 0 0 0">
          Linda David, Happy Customer
        </Text>
      </div>
    </Imagen>
  );
};

export default SectionImage;
