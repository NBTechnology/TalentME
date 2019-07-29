import React, { Component } from "react";
//import Stepper from "../../components/Organisms/Stepper/Stepper"
import Carrousel from "components/Organisms/Carrousel/Carrousel";


class TestCharly extends Component {

    render() {
        const contain =
            <div style={{ width: "60%", marginLeft: "20%" }}>
                <Carrousel settings={{
                    dots: true,
                    infinite: true,
                    draggable: true,
                    speed: 500,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }} />
            </div>
        return contain;
    }

}
export default TestCharly;