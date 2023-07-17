"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Receipt {
    constructor(firstName, lastName, telephone, email, document, cep, logradouro, gia, complemento, bairro, localidade, uf, paymentMethod, cardNumber, cardExpiration, cardHolderName, cardCvv) {
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
            this.cardNumber = cardNumber;
            this.cardExpiration = cardExpiration;
            this.cardHolderName = cardHolderName;
            this.cardCvv = cardCvv;
        }
    }
}
