import React from "react";
import EasyStepWork from "components/Molecules/EasyStepWork";
import Text from "components/Atoms/Text/Text";
import Button from "components/Atoms/Button/Button";
import Footer from "../Footer/Footer";

const EasyStepsWork = props => {
  const steps = [
    {
      id: "step_work_1",
      title: "Inscripción",
      text:
        "Rellena tus datos en nuestro formularios o inscribite a todas las ofertas que consideres oportunas. Si cumples con los requisitos mínimos, pasaras a nuestra base de datos y se te contactará para continuar con el proceso.",
      number: 1,
      position: "left bottom"
    },
    {
      id: "step_work_2",
      title: "Recibes ofertas",
      text:
        "Siguiendo tu perfil y tus intereses, te enviamos ofertas que te puedan encajar.",
      number: 2,
      position: "right bottom"
    },
    {
      id: "step_work_3",
      title: "Entrevista",
      text:
        "Te queremos conocer personalmente. Explicarte todo acerca sobre el puesto que vas a desarrollar. En ciertos casos, tendras entrevista presencial u online con el hotel que te va a contratar.",
      number: 3,
      position: "left bottom"
    },
    {
      id: "step_work_4",
      title: "Vuela",
      text:
        "¡ Conseguido ! Hemos conseguido el trabajo y pones rumbo a tu destino. Recuerda, vuelo incluido y sin pagarnos nada en ningún momento.",
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
      <div
        style={{
          background: "#F2F2F2",
          height: "133px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text variant="h2">EN 4 SENCILLOS PASOS</Text>
      </div>
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
        >
          INSCRIBIRSE
        </Button>
      </div>
    </div>
  );
};

export default EasyStepsWork;
