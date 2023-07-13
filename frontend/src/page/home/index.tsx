import style from "./Home.module.css";
/* import backNave from '../../assets/backNave.jpeg' */
import nav2 from "../../assets/nav2.jpeg";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Home() {
  interface StarWarsVehicle {
    name: string;
    model: string;
    vehicle_class: string;
    url: string;
  }

  interface StarWarsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: StarWarsVehicle[];
  }

  interface StarWarsImgMock {
    id: string;
    urlImage: string;
    valueNav: string;
  }

  const [starWars, setStarWars] = useState<StarWarsResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });

  const [cards, setCards] = useState<StarWarsImgMock[]>([]);

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
  };

  /*Api Mockada para exibir imagem*/
  const getImageMock = () => {
    axios
      .get("https://55d773bf-a68a-4bc7-aaa9-b690f2909b8d.mock.pstmn.io/cards")
      .then((response) => {
        console.log(response.data);
        setCards(response.data);
      });
  };

  useEffect(() => {
    getVehicle();
    getImageMock();
  }, []);

 /*  let startWars = {
    results: [
      {
        name: "Mildred",
        veiculo: "Yellow",
      }
    ]
  };
  
  let cards = [
    {
      placa: "123456",
      imageUrl: "www.google.com",
      lugar: "nenhum"
    }
  ];
  
  let combinedArray = startWars.results.map((result, index) => {
    return Object.assign({}, result, cards[index]);
  });
  console.log(combinedArray); */
  let combinedArray = starWars.results.map((result, index) => {
    return Object.assign({}, result, cards[index]);
  });
  console.log(combinedArray);



  return (
    <>
      <div className={style.background}>
        <div className={style.banner}>
          <div>
            <img src={logo} />
          </div>

          <div className={style.title}>
            <h1>escolha seu veiculo e lute</h1>
          </div>
        </div>

        <div className={style.main}>
          
          {combinedArray.map((vehicle) => (
            <div className={style.card} key={vehicle.url}>
              <div className={style.cardContent}>
                <img src={vehicle.urlImage} />
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
                  <span>valor:</span>
                  {vehicle.valueNav}
                </p>
                
                <Link
                  to={{
                    pathname: "/checkout",
                    search: `
                    &vehicleName=${vehicle.name}
                    &vehicleModel=${vehicle.model}
                    &vehicleClass=${vehicle.vehicle_class},
                    &vehicleImg=${vehicle.urlImage}
                    &vehicleValueNav=${vehicle.valueNav}`
                  }}
                >
                  <button>Comprar</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
