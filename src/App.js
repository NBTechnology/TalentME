import React from "react";
import logo from "logo.svg";
import "./App.css";
import Button from "components/Button/Button";
const App = () => {
  return (
    <div>
      <Button classes="btnInscribeme">Inscribeme</Button>
      <Button classes="btnPrimary" width="188px" height="51px">
        inscribirse
      </Button>
      <Button classes="btnPrimary" width="607px" height="38px">
        enviar
      </Button>

      {/* contact us */}
      <Button classes="btnPrimary" width="450px" height="38px">
        quiero inscribirme a ofertas
      </Button>
      <Button classes="btnPrimary" width="127px" height="38px" isBold>
        enviar
      </Button>

      {/* como funciona */}
      <Button classes="btnPrimary" width="189px" height="51px" isBold>
        inscribirse
      </Button>

      {/* destinos doha */}
      <Button classes="btnPrimary" width="270px" height="51px">
        todas las ofertas
      </Button>
      <Button
        type="image"
        width="260px"
        height="108px"
        bg="Boton_DUBAI.jpg"
        isBold
      >
        DUBAI
      </Button>
    </div>
  );
};

export default App;
