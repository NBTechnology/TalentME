import React, { Component } from "react";
//import Stepper from "../../components/Organisms/Stepper/Stepper"
import Experiences from "components/Organisms/Experiences/Experiences";
import Dialog from "components/Organisms/Dialog";
import BodyDialog from "components/Molecules/Dialog/BodyDialog";
import FooterDialog from "components/Molecules/Dialog/FooterDialog";

class TestCharly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      variant: "offer",
      itemsEnglish: [
        {
          id: 0,
          value: "bajo",
          label: "Nivel bajo"
        },
        {
          id: 1,
          value: "medio",
          label: "Nivel medio"
        },
        {
          id: 2,
          value: "alto",
          label: "Nivel alto"
        }
      ],
      checkPolity: false
    };
  }

  onClose = () => {
    this.setState({ open: false });
  };

  handleSubmitOffer = () => {
    this.setState({ variant: "formOffer" });
  };

  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChangePolity = () => {
    let polity = this.state.checkPolity;
    this.setState({ checkPolity: !polity });
  };

  selectHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmitFormOffer = () => {
    if (this.state.checkPolity) {
      this.setState({
        variant: "successOffer"
      });
    }
  };
  render() {
    const contain = (
      <div>
        asd{" "}
        <Dialog
          open={this.state.open}
          handleClose={this.onClose}
          salary="15.000€"
          variant={this.state.variant}
          handleSubmitOffer={this.handleSubmitOffer}
          inputHandler={this.inputHandler}
          selectHandler={this.selectHandler}
          itemsEnglish={this.state.itemsEnglish}
          levelEnglish={this.state.levelEnglish}
          checkPolity={this.state.checkPolity}
          handleChangePolity={this.handleChangePolity}
          handleSubmitFormOffer={this.handleSubmitFormOffer}
        />
      </div>
    );
    return contain;
  }
}
export default TestCharly;
