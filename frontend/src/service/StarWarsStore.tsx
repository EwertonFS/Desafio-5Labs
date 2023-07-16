import { makeAutoObservable } from "mobx";
import { StarWarsResponse } from "../interfaces/Interface";
import axios from "axios";




/* export const [starWars, setStarWars] = useState<StarWarsResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });


 export  const getVehicle = () => {
    axios
      .get("https://swapi.dev/api/vehicles")
      .then((response) => {
        console.log(response);
        setStarWars(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }; */




class StarWarsStore {
  starWars: StarWarsResponse =
    {
      count: 0,
      next: null,
      previous: null,
      results: [],
    }

  constructor() {
    makeAutoObservable(this);
  }

  getVehicle() {
    axios
      .get("https://swapi.dev/api/vehicles")
      .then((response) => {
        console.log(response);
        this.starWars = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const starWarsStore = new StarWarsStore();
