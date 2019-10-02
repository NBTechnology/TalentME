import React from "react";
import "./Stepper.css";
import Step from "components/Atoms/Step";

// Step

const Stepper = props => {
  let index = 1;
  let content = (
    <div className={"Stepper Stepper--" + props.type}>
      {props.data.map(info => {
        let subContent = (
          <Step
            title={info.title}
            image={info.image}
            index={index++}
            key={"StepCustom" + index}
          />
        );
        return subContent;
      })}
    </div>
  );
  return content;
};

export default Stepper;
