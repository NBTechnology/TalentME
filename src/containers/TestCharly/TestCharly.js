import React, { Component } from "react";
import Stepper from "../../components/Organisms/Stepper/Stepper"

class TestCharly extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Stepper type={""} data={[{ title: "Titulo1", image: "Porque_ME.jpg" }, { title: "Titulin 2", image: "Porque_ME.jpg" }, { title: "Titulo1", image: "Porque_ME.jpg" }, { title: "Titulin 2", image: "Porque_ME.jpg" }]} />
        );
    }

}
export default TestCharly;