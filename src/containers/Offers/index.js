/*
      itemsPosition: [
        // {
        //   id: 0,
        //   value: "recepcionista",
        //   label: "Recepcionista"
        // },
        // {
        //   id: 1,
        //   value: " camarero",
        //   label: " Camarero/a"
        // },
        // {
        //   id: 2,
        //   value: "bartender",
        //   label: "Bartender"
        // },
        // {
        //   id: 3,
        //   value: "supervisor",
        //   label: "Supervisor de sala"
        // },
        // {
        //   id: 4,
        //   value: "hostesses",
        //   label: "Hostesses"
        // },
        // {
        //   id: 5,
        //   value: "",
        //   label: "Todos"
        // }
      ],
      itemsPlace: [
        // {
        //   id: 0,
        //   value: "dubai",
        //   label: "Dubai"
        // },
        // {
        //   id: 1,
        //   value: "doha",
        //   label: "Doha"
        // },
        // {
        //   id: 2,
        //   value: "abu_dhabi",
        //   label: "Abu Dhabi"
        // },
        // {
        //   id: 3,
        //   value: "",
        //   label: "Todos"
        // }
      ],
      */
     import React, { Component } from "react";
import NavBar from "components/Organisms/NavBar/NavBar";
import Header from "components/Molecules/Header/Header";
import Select from "components/Atoms/Select/Select";
import Footer from "components/Organisms/Footer/Footer";
import { Grid } from "@material-ui/core";
import Offers from "components/Organisms/Offers/Offers";
import Facilities from "components/Organisms/Facilities/Facilities";
import Axios from "core/axios";

class OffersComponent extends Component {
  constructor(props) {
    super(props);
    this.service = new Axios();
    this.state = {
      positionOffer: "",
      placeOffer: "",
      itemsPosition: [],
      itemsPlace: [],
      offers: []
    };
  }

  componentDidMount() {
    this.service.getOffersVisibleWithParams({ limit: 8 }).then(response => {
      this.setState({ offers: response.data });
    });
    this.service.getPlaces().then(response => {
      this.setState({itemsPlace: response.data})
      this.state.itemsPlace.push({id:"", name:"Cualquier lugar"});//puseo al array un obejto con id vacio para que envie vacio a la api
    });
    this.service.getJobs().then(response => {
      this.setState({itemsPosition: response.data})
      this.state.itemsPosition.push({id:"", name:"Cualquier posicion"});//puseo al array un obejto con id vacio para que envie vacio a la api
    });

  }

  selectHandler = async event => {
    await this.setState({ [event.target.name]: event.target.value });
    //
    this.getOffers();

  };

  //limit, place, job
  getOffers(){
    this.service.getOffersVisibleWithParams({ limit: 8, place: this.state.placeOffer, job: this.state.positionOffer }).then(response => {
      this.setState({ offers: response.data });
      console.log(response.data);
    });
  }

  render() {
    return (
      <Grid container component="main" justify="center">
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
