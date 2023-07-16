import axios from "axios";
import { makeAutoObservable } from "mobx";
import { StarWarsImgMock } from "../interfaces/Interface";
import { BASE_URL_BEECEPTOR } from "../constants/constants";


/* export const [cards, setCards] = useState<StarWarsImgMock[]>([]); */


/*Api Mockada para exibir imagem*/
/* export const getImageMock = () => {
  axios
    .get("https://55d773bf-a68a-4bc7-aaa9-b690f2909b8d.mock.pstmn.io/cards")
    .then((response) => {
      console.log(response.data);
      setCards(response.data);
    });
}; */

/*refatorando*/
  /*Api Mock Microservidor*/
  class CardsStore{

  cards:StarWarsImgMock[]=[];

  constructor(){
    makeAutoObservable(this);
  }

  getImageMock() {
    axios
      .get(`${BASE_URL_BEECEPTOR}`)
      .then((response) => {
        console.log(response.data);
        this.cards = response.data;
      });
  }

  

}

export const cardsStore = new CardsStore();


