import { shipsStock } from "../data"





export default class ShipData {
    constructor(){}

    getData = async () => {
        
        const result  = shipsStock.map((nav)=>nav)

        return result

    }   
}

