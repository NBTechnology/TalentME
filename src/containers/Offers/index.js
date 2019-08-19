import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Select from "components/Atoms/Select/Select";
import Footer from "components/Organisms/Footer/Footer";
import { Grid } from "@material-ui/core";
import Offers from "components/Organisms/Offers/Offers";
import Facilities from "components/Organisms/Facilities/Facilities";
import Dialog from "components/Organisms/Dialog";

class OffersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      checkPolity: false,
      positionOffer: "",
      placeOffer: "",
      itemsPosition: [
        {
          id: 0,
          value: "recepcionista",
          label: "Recepcionista"
        },
        {
          id: 1,
          value: " camarero",
          label: " Camarero/a"
        },
        {
          id: 2,
          value: "bartender",
          label: "Bartender"
        },
        {
          id: 3,
          value: "supervisor",
          label: "Supervisor de sala"
        },
        {
          id: 4,
          value: "hostesses",
          label: "Hostesses"
        }
      ],
      itemsPlace: [
        {
          id: 0,
          value: "dubai",
          label: "Dubai"
        },
        {
          id: 1,
          value: "doha",
          label: "Doha"
        },
        {
          id: 2,
          value: "abu_dhabi",
          label: "Abu Dhabi"
        }
      ],
      offers: [
        {
          id: "offer0",
          position: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DOHA.jpg",
          place: "DUBAI",
          offer: "1 año",
          salary: "15.000€",
          infoOffer:
            "Idealmente gente joven con ganas de una experiencia única en el mundo. Inglés fluido, con muchas corvas y que las tengan hidratadas para un correcto bien estar."
        },
        {
          id: "offer1",
          position: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DOHA.jpg",
          place: "DUBAI",
          infoOffer:
            "Idealmente gente joven con ganas de una experiencia única en el mundo. Inglés fluido, con muchas corvas y que las tengan hidratadas para un correcto bien estar."
        },
        {
          id: "offer2",
          position: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DOHA.jpg",
          place: "DUBAI",
          infoOffer:
            "Idealmente gente joven con ganas de una experiencia única en el mundo. Inglés fluido, con muchas corvas y que las tengan hidratadas para un correcto bien estar."
        },
        {
          id: "offer3",
          position: "Camarero",
          subTitle: "Marriot Dubai",
          image: "Boton_DOHA.jpg",
          place: "DUBAI",
          infoOffer:
            "Idealmente gente joven con ganas de una experiencia única en el mundo. Inglés fluido, con muchas corvas y que las tengan hidratadas para un correcto bien estar."
        }
      ]
    };
  }

  selectHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
    this.setState({ open: false, variant: "offer" });
  };

  handleSubmitOffer = () => {
    this.setState({ variant: "formOffer" });
  };

  handleChangePolity = () => {
    let polity = this.state.checkPolity;
    this.setState({ checkPolity: !polity });
  };

  handleSubmitFormOffer = () => {
    if (this.state.checkPolity) {
      this.setState({
        variant: "successOffer"
      });
    }
  };

  render() {
    return (
      <Grid container component="main" justify="center">
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
        <NavBar />
        <Grid
          item
          xs={12}
          style={{ background: "#F2F2F2", paddingBottom: "26px" }}
        >
          <Grid container justify="center">
            <Grid
              item
              xs={12}
              md={10}
              style={{
                marginTop: "154px"
              }}
            >
              <Grid
                container
                spacing={2}
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0 2px 4px 0 rgba(0,0,0,0.30)",
                  borderRadius: "4px"
                }}
              >
                <Grid item xs={12} md={6}>
                  <Select
                    fullWidth
                    variant="outlined"
                    idInput="idPosition"
                    labelInput="Cualquier posición"
                    value={this.state.positionOffer}
                    handleChange={this.selectHandler}
                    name="positionOffer"
                    items={this.state.itemsPosition}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Select
                    fullWidth
                    variant="outlined"
                    idInput="idPlace"
                    labelInput="Cualquier lugar"
                    value={this.state.placeOffer}
                    handleChange={this.selectHandler}
                    name="placeOffer"
                    items={this.state.itemsPlace}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={10}>
              <Offers
                title=""
                labelButton="QUIERO INSCRIBIRME A OFERTAS"
                offers={this.state.offers}
                selectOffer={this.selectOffer}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10} style={{ paddingBottom: "26px" }}>
          <Facilities variant="home" />
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

export default OffersComponent;
