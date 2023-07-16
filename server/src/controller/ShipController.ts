import { Request, Response } from "express"
import ShipBusiness from "../business/ShipBusiness"


const shipBusiness = new ShipBusiness

export default class ShipController {
    
     constructor(
        
     ){} 
    

    getAllShip = async(req:Request,res:Response):Promise<void> =>{

       try {

        const result = await shipBusiness.getAllShippBusiness()
        
        res.status(200).send(result)
        
       } catch (error) {
        res.status(500).send("Erro")
        console.log(error)
       }
    }
    
    
    
}