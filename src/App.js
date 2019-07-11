import React from "react";

import "./App.css";
import Button from "components/Atoms/Button/Button";
import HeaderCard from "components/Molecules/Card/HeaderCard/HeaderCard";
import BodyCard from "components/Molecules/Card/BodyCard/BodyCard";
import FooterCard from "components/Molecules/Card/FooterCard/FooterCard";
import Card from "components/Organisms/Card/Card";
import ArrowForwardRounded from "@material-ui/icons/ArrowForwardRounded";

const App = () => {
  return (
    <div>
      <Button
        variant="secondary"
        width="202px"
        height="47px"
        btnBorder="1px solid #D2D2D2"
      >
        Inscribeme
      </Button>
      <Button variant="primary" width="188px" height="51px">
        inscribirse
      </Button>
      <Button variant="primary" width="607px" height="38px">
        enviar
      </Button>
      {/* contact us */}
      <Button variant="primary" width="450px" height="38px">
        quiero inscribirme a ofertas
      </Button>
      <Button variant="primary" width="127px" height="38px" isBold>
        enviar
      </Button>
      {/* como funciona */}
      <Button variant="primary" width="189px" height="51px" isBold>
        inscribirse
      </Button>
      {/* destinos doha */}
      <Button variant="primary" width="270px" height="51px">
        todas las ofertas
      </Button>
      <Button
        variant="image"
        width="260px"
        height="108px"
        isGradient
        bg="Boton_DUBAI.jpg"
        isBold
        fontSize="20px"
        letterSpacing="4px"
      >
        DUBAI
      </Button>
      <Button
        variant="icon"
        width="356px"
        height="56px"
        icon={<ArrowForwardRounded className="btnIcon"></ArrowForwardRounded>}
        fontSize="20px"
        btnBorder="1px solid #FFC80A"
      >
        COMO FUNCIONA
      </Button>
      <HeaderCard />
      <BodyCard />
      <FooterCard />
      <Card />
    </div>
  );
};

export default App;
