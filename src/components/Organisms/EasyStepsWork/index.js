import React from "react";
import EasyStepWork from "components/Molecules/EasyStepWork";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";
import Footer from "../Footer/Footer";

const EasyStepsWork = props => {
  const steps = [
    {
      id: "step_work_1",
      title: "Manda tu CV - Inscribete",
      text:
        "Rellena tus datos en nuestro formulario y envíanos tu currículum actualizado."+
        "Si cumples con los requisitos mínimos, nos pondremos en contacto contigo para conocer tus intereses y ayudarte a encontrar trabajo en Oriente Medio.",
      number: 1,
      position: "left bottom"
    },
    {
      id: "step_work_2",
      title: "Recibes ofertas",
      text:
        "Una vez hablemos contigo, te enviaremos las ofertas que consideremos encajan mejor con tus objetivos profesionales y tus intereses personales."+

        "Nuestro objetivo será que encuentres la mejor oportunidad laboral.",
      number: 2,
      position: "right bottom"
    },
    {
      id: "step_work_3",
      title: "Entrevista",
      text:
        "Pondremos en contacto tu talento con las mejores oportunidades profesionales en hospitality."+

        "Realizarás el proceso de selección directamente con los hoteles, y serán ellos quienes decidan si tu próximo destino es Oriente Medio.",
      number: 3,
      position: "left bottom"
    },
    {
      id: "step_work_4",
      title: "Vuela",
      text:
        "¡ Conseguido ! Una vez el hotel descubra tu infinito talento, podrás poner rumbo a tu nuevo destino."+

        "Nosotros te ayudaremos en todo el papeleo necesario, y recuerda, tu vuelo de ida está incluido.",
      number: 4,
      position: "right bottom"
    }
  ];

  let content = steps.map(step => {
    return (
      <EasyStepWork
        number={step.number}
        key={step.id}
        position={step.position}
        title={step.title}
        text={step.text}
      />
    );
  });
  return (
    <div style={{ position: "relative", top: "48px" }}>
      {content}
      <div
        style={{
          marginTop: "70px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "98px"
        }}
      >
        <Button
          variant="primary"
          width="189px"
          height="51px"
          fontSize="16px"
          isBold
          letterSpacing="3.2px"
          link="/inscribirse"
        >
          INSCRIBIRSE
        </Button>
      </div>
    </div>
  );
};

export default EasyStepsWork;
