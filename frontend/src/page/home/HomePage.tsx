import style from "./Home.module.css";
import logo from "../../assets/logo3D.png";
import stylesVideo from "./Home.module.css";
import videoSrc from '../../assets/videoRemove.mp4';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../components/button/Button.module.css"
import { starWarsStore } from "../../service/StarWarsStore";
import { cardsStore } from "../../service/CarsStore"; 
import { observer } from 'mobx-react-lite';
import styleLoading from './Home.module.css';


export const Home = observer (() => {
  



  useEffect(() => {
    starWarsStore.getVehicle();
     cardsStore.getImageMock(); 
  }, []);

  

   let combinedArray = starWarsStore.starWars.results.map((result, index) => {
    return Object.assign({}, result, cardsStore.cards[index]);
  });


  const [isLoading , setIsLoading]=useState(true)

  useEffect(()=>{
    if (starWarsStore.starWars.results.length >0
      && cardsStore.cards.length > 0){
      
        setIsLoading(false)
   }

  },[combinedArray]);


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
        {isLoading?
        <span className={styleLoading.loader}></span>
        :
            combinedArray.map((vehicle) => (
            <div className={style.card} key={vehicle.url}>
              <div className={style.cardContent}>
                <img src={ vehicle.urlImage} />
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
                  { vehicle.valueNav}
                </p>
                
                <Link
                  to={{
                    pathname: "/checkout",
                    search: `
                    &vehicleName=${vehicle.name}
                    &vehicleModel=${vehicle.model}
                    &vehicleClass=${vehicle.vehicle_class}
                    &vehicleImg=${vehicle.urlImage}
                    &vehicleValueNav=${vehicle.valueNav}` 
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
