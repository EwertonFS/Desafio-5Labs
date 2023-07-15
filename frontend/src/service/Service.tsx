/* import axios from "axios";
import { StarWarsResponse } from "../interfaces";
import { useState } from "react";



export const [starWars, setStarWars] = useState<StarWarsResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
});

export const getVehicle = () => {



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


/* export const [cards, setCards] = useState<StarWarsImgMock[]>([]);

export const getImageMock = () => {
    axios
      .get(`${BASE_URL_BEECEPTOR}`)
      .then((response) => {
        console.log(response.data);
        setCards(response.data);
      });
  };
 */
