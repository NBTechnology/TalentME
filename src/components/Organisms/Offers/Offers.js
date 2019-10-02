import React, { Component } from "react";
import Card from "components/Organisms/Card/Card";
import Text from "components/Atoms/Text/Text";
import { Grid } from "@material-ui/core";
import Button from "components/Atoms/Button/Button";
import Dialog from "components/Organisms/Dialog";

class Offers extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      offers: props.offers,
      offerSelected: {},
      open: false,
      variant: "offer",
      itemsEnglish: [
        {
          id: "Nivel bajo",
          name: "Nivel bajo"
        },
        {
          id: "Nivel medio",
          name: "Nivel medio"
        },
        {
          id: "Nivel alto",
          name: "Nivel alto"
        }
      ],
      offer: {},
      checkPolity: false
    };
  }

  selectOffer = id => {
    const offerSelected = this.props.offers.find(offer => offer.id === id);
    console.log(offerSelected);
    this.setState({ offerSelected, open: true });
  };

  /* dialog */

  onClose = () => {
    this.setState({ open: false, variant: "offer" });
  };

  handleSubmitOffer = () => {
    const offer = {};
    offer.id = this.state.offerSelected.id;
    this.setState({ variant: "formOffer", offer });
  };

  inputHandler = event => {
    const offer = { ...this.state.offer };
    offer[event.target.name] = event.target.value;
    this.setState({ offer });
  };

  handleChangePolity = () => {
    let polity = this.state.checkPolity;
    this.setState({ checkPolity: !polity });
  };

  selectHandler = event => {
    const offer = { ...this.state.offer };
    offer[event.target.name] = event.target.value;
    this.setState({
      offer
    });
  };

  handleSubmitFormOffer = () => {
    if (this.state.checkPolity) {
      console.log("offer form");
      console.log(this.state.offer);
      this.setState({
        variant: "successOffer"
      });
    }
  };

  render() {
    let offersContent = this.props.offers.map(offer => {
      offer.name = offer.placeName.toUpperCase();
      switch (offer.name) {
        case "DUBAI":
          offer.image = "Boton_DUBAI.jpg";
          break;
        case "DOHA":
          offer.image = "Boton_DOHA.jpg";
          break;
        case "ABU DHABI":
          offer.image = "Boton_ABU_DHABI.jpg";
          break;
        default:
          break;
      }
      return (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={offer.id}
          style={{ marginTop: "32px" }}
        >
          <Card
            variant="cardOffer"
            infoOffer={offer.infoOffer}
            selectOffer={this.selectOffer}
            idOffer={offer.id}
            {...offer}
          />
        </Grid>
      );
    });
    return (
      <Grid container justify="center">
        {/* <div
      style={{
        position: "relative",
        top: "48px",
        width: "80%",
        marginLeft: "10%"
      }}
    > */}
        <Dialog
          open={this.state.open}
          handleClose={this.onClose}
          offerSelected={this.state.offerSelected}
          variant={this.state.variant}
          handleSubmitOffer={this.handleSubmitOffer}
          inputHandler={this.inputHandler}
          selectHandler={this.selectHandler}
          itemsEnglish={this.state.itemsEnglish}
          levelEnglish={this.state.offer.levelEnglish}
          checkPolity={this.state.checkPolity}
          handleChangePolity={this.handleChangePolity}
          handleSubmitFormOffer={this.handleSubmitFormOffer}
        />
        <Grid item xs={12}>
          <div style={{ textAlign: "center" }}>
            <Text variant="h2">{this.props.title}</Text>
          </div>
        </Grid>
        {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      > */}
        <Grid container spacing={4}>
          {offersContent}
        </Grid>
        {/* </div> */}
        {/* </div> */}
        <Grid
          item
          xs={12}
          md={this.props.labelButton ? 6 : 3}
          style={{ marginTop: "60px" }}
        >
          <Button
            variant="primary"
            height="51px"
            fontSize="16px"
            isBold
            letterSpacing="3.2px"
          >
            {this.props.labelButton || "TODAS LAS OFERTAS"}
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Offers;
