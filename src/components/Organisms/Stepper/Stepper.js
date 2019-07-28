
import React from "react";
import "./Stepper.css";
import Image from "../../Atoms/Imagen/Imagen";
import Text from "../../Atoms/Text/Text"

// Step
const Step = (props) => {
    return <div className="Stepper__step">
        <div className="Stepper__img">
            <Image width={80+"px"} height={80+"px"} url={props.image} ></Image>
        </div>
        <div className="Stepper__indicator">
            <span className="Stepper__info">{props.index}</span>
        </div>
        <div className="Stepper__label">
        <Text variant={"p1"} letterSpacing={"3px"} color={"#212121"}>{props.title}</Text>
        </div>
        {/* <div className="Stepper__panel">
            {props.children}
        </div> */}
    </div>;
}

//TYPE Sin nada: horizontal con textos debajo. Inline: horizontal textos a la derecha. Vertical: vertical con textos a la derecha
// PROPS -> Data(title, img), Type
const Stepper = (props) => {
    let index = 1;
    let content = <div className={"Stepper Stepper--" + props.type}>
        {
            props.data.map(info => {
                let subContent = <Step title={info.title} image={info.image} index={index++} key={"StepCustom" + index}/>
                return subContent;
            })
        }
    </div>;
    return content;
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentTabIndex : 0
//     };

//   };

//   showActiveStep = (tabIndex) => {
//     currentPanel.style.display = "none";
//     parent[newPanelIndex].style.display = "block";
//   };

// return (
//   <div>
//     <Stepper>
//       <Step indicator="1" title="Step 1">
//         <div className="Content">
//           <button>Prev</button>
//           <button>Next</button>
//         </div>
//       </Step>          
//       <Step indicator="2" title="Step 2">
//         <div className="Content">
//           <button>Prev</button>
//           <button>Next</button>
//         </div>
//       </Step>          
//       <Step indicator="3" title="Step 3">
//         <div className="Content">
//           <button>Prev</button>
//           <button>Next</button>
//         </div>
//       </Step>               
//     </Stepper> 
//   </div>
// );
// }

export default Stepper;