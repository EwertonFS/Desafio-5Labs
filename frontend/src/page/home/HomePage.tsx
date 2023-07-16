import style from "./Home.module.css";
import logo from "../../assets/logo3D.png";
import imgLocal from "../../assets/nav5.jpeg";
import stylesVideo from "./Home.module.css";
import videoSrc from '../../assets/videoRemove.mp4';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../components/button/Button.module.css"
import { starWarsStore } from "../../service/StarWarsStore";
import { cardsStore } from "../../service/CarsStore"; 
import { observer } from 'mobx-react-lite';


export const Home = observer (() => {
 
  /* interface StarWarsVehicle {
    name: string;
    model: string;
    vehicle_class: string;
    url: string;
  } */

  /* interface StarWarsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: StarWarsVehicle[];
  }

  interface StarWarsImgMock {
    id: string;
    urlImage: string;
    valueNav: string;
  } */

  /* const [starWars, setStarWars] = useState<StarWarsResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  

   const getVehicle = () => {
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
  
  /*Api Mockada para exibir imagem*/
   /* const [cards, setCards] = useState<StarWarsImgMock[]>([]);
   const getImageMock = () => {
     axios
       .get(`${BASE_URL_BEECEPTOR}`)
       .then((response) => {
         console.log(response.data);
         setCards(response.data);
       });
  }; */ 

  

  useEffect(() => {
    starWarsStore.getVehicle();
     cardsStore.getImageMock(); 
  }, []);



   let combinedArray = starWarsStore.starWars.results.map((result, index) => {
    return Object.assign({}, result, cardsStore.cards[index]);
  });

  console.log(combinedArray); 



  return (
    <>
      <div className={style.background}>
        <div className={style.banner}>
          <div>
            <img src={logo} />
          </div>
          <video className={stylesVideo.video} autoPlay muted loop>
          <source src={videoSrc} type="video/mp4" />
          </video>
          <div className={style.title}>
            <h1>Que a Força esteja com você!</h1>
          </div>
        </div>

        <div className={style.main}>
          
          {combinedArray.map((vehicle) => (
            <div className={style.card} key={vehicle.url}>
              <div className={style.cardContent}>
                <img src={ vehicle.urlImage?vehicle.urlImage:imgLocal } />
              </div>
              <div className={style.cardFooter}>
                <p>
                  <span>name:</span>
                  {vehicle.name}
                </p>
                <p>
                  <span>model:</span>
                    {vehicle.model}
                </p>
                <p>
                  <span>vehicle:</span>
                  {vehicle.vehicle_class}
                </p>
                <p>
                  <span>valor</span>
                  { vehicle.valueNav?vehicle.valueNav:"100" }
                </p>
                
                <Link
                  to={{
                    pathname: "/checkout",
                    search: `
                    &vehicleName=${vehicle.name}
                    &vehicleModel=${vehicle.model}
                    &vehicleClass=${vehicle.vehicle_class}`,
                   /*  &vehicleImg=${vehicle.urlImage}
                    &vehicleValueNav=${vehicle.valueNav}` */
                  }}
                >
                  <button className={styles.buttonBuy}>Comprar</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
