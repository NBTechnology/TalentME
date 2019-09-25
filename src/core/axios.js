import axios from "axios";

class axiosClient {
  constructor() {
    this.client = axios.create({
      // baseURL: "http://localhost/api/"
      baseURL: process.env.REACT_APP_API_URL
    });
    // axios.defaults.headers.common["Content-type"] = "application/json";
  }

  //OFFERS

  disableOffer = id => {
    return this.client.get("offers/disableOffer.php", { id: id });
  };

  getOffer = id => {
    return this.client.get("offers/getOffers.php", { id: id });
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

  getOffersVisibleParams = (limit, place, job) => {
    return this.client.get("offers/getOffersOnlyVisiblesWithParams.php", {
      limit: limit,
      place: place,
      job: job
    });
  };

  postOffer = (
    job,
    location,
    placesId,
    description,
    salary,
    durationContract,
    moreInfo,
    dateEnd,
    isVisible
  ) => {
    return this.client.get("offers/postOffer.php", {
      job: job,
      location: location,
      placesId: placesId,
      description: description,
      salary: salary,
      durationContract: durationContract,
      moreInfo: moreInfo,
      dateEnd: dateEnd,
      isVisible: isVisible
    });
  };

  updateOffer = (
    id,
    job,
    location,
    placesId,
    description,
    salary,
    durationContract,
    moreInfo,
    dateEnd,
    isVisible
  ) => {
    return this.client.get("offers/updateOffer.php", {
      id: id,
      job: job,
      location: location,
      placesId: placesId,
      description: description,
      salary: salary,
      durationContract: durationContract,
      moreInfo: moreInfo,
      dateEnd: dateEnd,
      isVisible: isVisible
    });
  };

  //PLACES
  getPlace = id => {
    return this.client.post("places/getPlace.php", { id: id });
  };

  getPlaces = () => {
    return this.client.get("places/getPlaces.php");
  };

  postPlaces = name => {
    return this.client.get("places/postPlace.php", { name: name });
  };

  updatePlaces = (id, name) => {
    return this.client.get("places/postPlace.php", { id: id, name: name });
  };

  registerOffer = data => {
    const formData = new FormData();

    formData.append("avatar", data.file);
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("age", data.age);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("levelEnglish", data.levelEnglish);
    formData.append("message", data.message);

    return this.client.post("offers/registerOffer.php", formData, {
      headers: {
        "content-type": "multipart/form-data"
      }
    });
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
