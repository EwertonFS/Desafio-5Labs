
export interface Payment {
  paymentMethod: PaymentMethod
  cardNumber?: string
  cardExpiration?: string
  cardHolderName?: string
  cardCvv?: string
}


export type BoletoPayment = {
  type: 'boleto'
}

export type CartaoPayment = {
  type: 'cartao'
  cardNumber: string
  cardExpiration: string
  cardHolderName: string
  cardCvv: string
}



export type PaymentMethod = BoletoPayment | CartaoPayment;





  