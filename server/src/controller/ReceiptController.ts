import { Request, Response } from "express";
import { ReceipBusiness } from "../business/ReceiptBuisiness";

    const receiptBusiness = new ReceipBusiness

export class ReceiptController{

    constructor(){}

    createReceiptController= async (req:Request,res:Response):Promise<void>=>{
        
        try {
            const{
                firstName ,
                lastName ,
                telephone ,
                email ,
                document,
                cep ,
                logradouro ,
                gia ,
                complemento ,
                bairro ,
                localidade ,
                uf ,
                paymentMethod,
                cardNumber,
                cardExpiration ,
                cardHolderName ,
                cardCvv ,
               }=req.body

               const result = await receiptBusiness.createReceipBusiness(firstName ,
                lastName ,
                telephone ,
                email ,
                document,
                cep ,
                logradouro ,
                gia ,
                complemento ,
                bairro ,
                localidade ,
                uf ,
                paymentMethod,
                cardNumber,
                cardExpiration ,
                cardHolderName ,
                cardCvv )
    
                res.status(200).json(result);
         
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" })
        }
    }

}