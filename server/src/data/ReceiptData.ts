import { PaymentMethod } from "../interface/Payment";
import { Document } from "../interface/User";



export class ReceiptData {

    createData=async(
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
        paymentMethod: PaymentMethod,
        cardNumber?: string,
        cardExpiration?: string,
        cardHolderName?: string,
        cardCvv?: string,
    ):Promise<any> =>{
        let register:any[] = []
       
        try {
            const data = {
                firstName,
                lastName,
                telephone,
                email,
                document,
                cep,
                logradouro,
                gia,
                complemento,
                bairro,
                localidade,
                uf,
                paymentMethod,
                cardNumber,
                cardExpiration,
                cardHolderName,
                cardCvv
            }

                register.push(data);

                // Retornar o registro
                return register;
        } catch (error) {
            console.error(error);
            throw new Error("Failed to create data")
        }
    }
}