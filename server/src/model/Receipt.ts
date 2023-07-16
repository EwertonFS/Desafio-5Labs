import { Address } from "../interface/Address";
import { Payment, PaymentMethod } from "../interface/Payment";
import { Document, User } from "../interface/User";





class Receipt implements User, Address, Payment {
    firstName: string;
    lastName: string;
    telephone: string;
    email: string;
    document:Document;
    cep: string;
    logradouro: string;
    gia: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    paymentMethod: PaymentMethod;
    cardNumber?: string;
    cardExpiration?: string;
    cardHolderName?: string;
    cardCvv?: string;
  
    constructor(
      firstName: string,
      lastName: string,
      telephone: string,
      email: string,
      document: Document,
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
      cardCvv?: string
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.telephone = telephone;
      this.email = email;
      this.document = document;
      this.cep = cep;
      this.logradouro = logradouro;
      this.gia = gia;
      this.complemento = complemento;
      this.bairro = bairro;
      this.localidade = localidade;
      this.uf = uf;
      this.paymentMethod = paymentMethod;
  
      if (paymentMethod.type === 'cartao') {
        this.cardNumber = cardNumber!;
        this.cardExpiration = cardExpiration!;
        this.cardHolderName = cardHolderName!;
        this.cardCvv = cardCvv!;
      }
    }
  }

  /* exclamação é um operador de asserção de não nulo */