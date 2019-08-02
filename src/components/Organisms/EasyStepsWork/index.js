import React from "react";
import EasyStepWork from "components/Molecules/EasyStepWork";

const EasyStepsWork = props => {
  const steps = [
    {
      id: "step_work_1",
      title: "Inscripción",
      text:
        "Rellena tus datos en nuestro formularios o inscribite a todas las ofertas que consideres oportunas.\r Si cumples con los requisitos mínimos, pasaras a nuestra base de datos y se te contactará para continuar con el proceso.",
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
        "Te queremos conocer personalmente. Explicarte todo acerca sobre el puesto que vas a desarrollar.\rEn ciertos casos, tendras entrevista presencial u online con el hotel que te va a contratar.",
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
  return content;
};

export default EasyStepsWork;
