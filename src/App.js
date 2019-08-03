import React from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";
import DestinoDubai from "containers/DestinoDubai/DestinoDubai";
import DestinoDoha from "containers/DestinoDoha/DestinoDoha";
import DestinoAbuDhabi from "containers/DestinoAbuDhabi/DestinoAbuDhabi";
import Home from "containers/Home/Home";
import TestCharly from "containers/TestCharly/TestCharly";
import Inscribirse from "containers/Inscribirse/Inscribirse";
import ContactUs from "containers/ContactUs/ContactUs";
import ComoFunciona from "containers/ComoFunciona";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dubai" exact component={DestinoDubai} />
      <Route path="/doha" exact component={DestinoDoha} />
      <Route path="/abu-dhabi" exact component={DestinoAbuDhabi} />
      <Route path="/inscribirse" exact component={Inscribirse} />
      <Route path="/contact-us" exact component={ContactUs} />
      <Route path="/como-funciona" exact component={ComoFunciona} />
      {/* <Route path="/testCharly" exact component={TestCharly} /> */}
    </Switch>
  );
};

export default App;

//OLD
// <div>
//   <NavBar />
//   <Button
//     variant="secondary"
//     width="202px"
//     height="47px"
//     btnBorder="1px solid #D2D2D2"
//   >
//     Inscribeme
//   </Button>
//   <Button variant="primary" width="188px" height="51px">
//     inscribirse
//   </Button>
//   <Button variant="primary" width="607px" height="38px">
//     enviar
//   </Button>
//   {/* contact us */}
//   <Button variant="primary" width="450px" height="38px">
//     quiero inscribirme a ofertas
//   </Button>
//   <Button variant="primary" width="127px" height="38px" isBold>
//     enviar
//   </Button>
//   {/* como funciona */}
//   <Button variant="primary" width="189px" height="51px" isBold>
//     inscribirse
//   </Button>
//   {/* destinos doha */}
//   <Button variant="primary" width="270px" height="51px">
//     todas las ofertas
//   </Button>
//   <Button
//     variant="image"
//     width="260px"
//     height="108px"
//     isGradient
//     bg="Boton_DUBAI.jpg"
//     isBold
//     fontSize="20px"
//     letterSpacing="4px"
//   >
//     DUBAI
//   </Button>
//   <Button
//     variant="icon"
//     width="356px"
//     height="56px"
//     icon={
//       <ArrowForwardRounded
//         style={{ color: "red", position: "relative", right: "-30px" }}
//       />
//     }
//     fontSize="20px"
//     btnBorder="1px solid #FFC80A"
//   >
//     COMO FUNCIONA
//   </Button>
//   <HeaderCard />
//   <BodyCard />
//   <FooterCard />
//   <Card />
//   <Imagen url="oficial_talentme_black.png" width="100px" />
// </div>
