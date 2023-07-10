import style from './Home.module.css'
/* import backNave from '../../assets/backNave.jpeg' */
import nav2 from '../../assets/nav2.jpeg'
import logo from '../../assets/logo.png'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    const [starWars, setStarWars] = useState<StarWarsResponse>({
        count: 0,
        next: null,
        previous: null,
        results: [],
    });

    const getVehicle = () => {
        axios
            .get('https://swapi.dev/api/vehicles')
            .then((response) => {
                console.log(response);
                setStarWars(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getVehicle();
    }, []);

    const starWarsMapped = starWars.results.map((vehicle) => {
        const vehicleClass: string = vehicle.vehicle_class;

        console.log(vehicleClass);
    })


    return (
        <>
            <div className={style.background}>

                <div className={style.banner}>
                    <div>
                        <img src={logo} />

                    </div>

                    <div className={style.title}>
                        <h1 >escolha seu veiculo e lute</h1>
                    </div>


                </div>

                <div className={style.main}>

                    {starWars.results.map((vehicle) => (
                        <div className={style.card} key={vehicle.url}>
                            <div className={style.cardContent}>
                                <img src={nav2} />
                            </div>
                            <div className={style.cardFooter}>
                                <p>
                                    <span>name:</span>{vehicle.name}
                                </p>
                                <p>
                                    <span>model:</span>{vehicle.model}
                                </p>
                                <p>
                                    <span>vehicle:vehicle_class</span>{vehicle.vehicle_class}
                                </p>
                                <Link
                                    to={{
                                        pathname: '/checkout',
                                        search: `?vehicleName=${vehicle.name}&vehicleModel=${vehicle.model}&vehicleClass=${vehicle.vehicle_class}`,
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
    )
}