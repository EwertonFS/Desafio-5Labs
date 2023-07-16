import { Request, Response } from "express";
import ShipData from "../data/ShipData";


const shipData = new ShipData

export default class ShipBusiness {
    constructor(){}

    getAllShippBusiness= async ()=>{

        const result= await shipData.getData();

        return result;
    }
}