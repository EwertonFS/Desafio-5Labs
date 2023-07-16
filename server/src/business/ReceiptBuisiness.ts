import { ReceiptData } from "../data/ReceiptData";
import { PaymentMethod } from "../interface/Payment";
import { Document } from "../interface/User";


const receiptData = new ReceiptData

export class ReceipBusiness{
    
    createReceipBusiness=(
        firstName: string,
        lastName: string,
        telephone: string,
        email: string,
        document:Document,
        cep: string,
        logradouro: string,
        gia: string,
        complemento: string,
        bairro: string,
        localidade: string,
        uf: string,
        paymentMethod:PaymentMethod,
        cardNumber?: string,
        cardExpiration?: string,
        cardHolderName?: string,
        cardCvv?: string,
      
    )=>{
        
        try {

        const result =  receiptData.createData(
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
            cardNumber ,
            cardExpiration ,
            cardHolderName ,
            cardCvv,
        )

         return result
            
        } catch (error) {
            
        }
    }
}