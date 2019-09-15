import axios from "axios";

class axiosClient {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost/api/"
    });
    // axios.defaults.headers.common["Content-type"] = "application/json";
  }

  //OFFERS
  getOffer = url => {
    return this.client.get(url);
  };

  getOffers = url => {
    return this.client.get("/offers/getOffers.php");
  };

  getOffersVisibleWithParams = data => {
    return this.client.post("offers/getOffersOnlyVisiblesWithParams.php", data);
  };

  getOffersVisible = () => {
    return this.client.get("offers/getOffersOnlyVisibles.php");
  };

  //PLACES
  getPlace = id => {
    return this.client.post("places/getPlace.php", { id: id });
  };

  // get = url => {
  //   return Auth.currentSession().then(response => {
  //     return this.client.get(url, {
  //       headers: {
  //         Authorization: response.getIdToken().getJwtToken(),
  //         "Content-Type": "application/json"
  //       }
  //     });
  //   });
  // };

  // post = (url, data) => {
  //   return Auth.currentSession().then(response => {
  //     return this.client.post(url, data, {
  //       headers: {
  //         Authorization: response.getIdToken().getJwtToken(),
  //         "Content-Type": "application/json"
  //       }
  //     });
  //   });
  // };

  // put = (url, data) => {
  //   return Auth.currentSession().then(response => {
  //     return this.client.put(url, data, {
  //       headers: {
  //         Authorization: response.getIdToken().getJwtToken(),
  //         "Content-Type": "application/json"
  //       }
  //     });
  //   });
  // };

  // delete = url => {
  //   return Auth.currentSession().then(response => {
  //     return this.client.delete(url, {
  //       headers: {
  //         Authorization: response.getIdToken().getJwtToken(),
  //         "Content-Type": "application/json"
  //       }
  //     });
  //   });
  // };
}

export default axiosClient;
