import React, { Component } from "react";
//import Stepper from "../../components/Organisms/Stepper/Stepper"
import EasySteps from "components/Organisms/EasySteps/EasySteps";


class TestCharly extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const contain =
            <EasySteps type={""} data={[{ title: "Inscripcion", image: "Porque_ME.jpg" }, { title: "Recibe ofertas", image: "Home_Header.jpg" },{ title: "Entrevista", image: "Porque_ME.jpg" }, { title: "¡Vuela!", image: "Porque_ME.jpg" }]} />
        return contain;
    }

}
export default TestCharly;