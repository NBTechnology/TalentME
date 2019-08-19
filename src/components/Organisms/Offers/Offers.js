import React, { Component } from "react";
import Card from "components/Organisms/Card/Card";
import Text from "components/Atoms/Text/Text";
import { Grid } from "@material-ui/core";
import Button from "components/Atoms/Button/Button";
import Dialog from "components/Organisms/Dialog";

class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: props.offers,
      offerSelected: {},
      open: false,
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

  selectOffer = id => {
    const offerSelected = this.state.offers.find(offer => offer.id === id);
    offerSelected.imageButton = offerSelected.image;
    offerSelected.labelButton = offerSelected.place;
    offerSelected.titlePosition = offerSelected.position;
    offerSelected.subTitlePosition = offerSelected.subTitle;
    offerSelected.location = offerSelected.place;
    this.setState({ offerSelected, open: true });
  };

  /* dialog */

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
    let offersContent = this.state.offers.map(offer => {
      return (
        <Grid item xs={12} sm={6} md={3} key={offer.id}>
          <Card
            title={offer.position}
            subTitle={offer.subTitle}
            imageButton={offer.image}
            labelButton={offer.place}
            variant="cardOffer"
            infoOffer={offer.infoOffer}
            selectOffer={this.selectOffer}
            idOffer={offer.id}
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
          {...this.state.offerSelected}
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
