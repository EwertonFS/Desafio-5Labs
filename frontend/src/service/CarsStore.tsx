import axios from "axios";
import { makeAutoObservable } from "mobx";
import { StarWarsImgMock } from "../interfaces/Interface";
import { BASE_URL_MYAPI } from "../constants/constants";



  class CardsStore{

  cards:StarWarsImgMock[]=[];

  constructor(){
    makeAutoObservable(this);
  }

  getImageMock() {
    axios
      .get(`${BASE_URL_MYAPI}`)
      .then((response) => {
        console.log(response.data);
        this.cards = response.data;
      });
  }

  

}

export const cardsStore = new CardsStore();


