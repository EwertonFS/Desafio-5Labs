"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptData = void 0;
class ReceiptData {
    constructor() {
        this.createData = async (firstName, lastName, telephone, email, document, cep, logradouro, gia, complemento, bairro, localidade, uf, paymentMethod, cardNumber, cardExpiration, cardHolderName, cardCvv) => {
            let register = [];
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
                };
                register.push(data);
                return register;
            }
            catch (error) {
                console.error(error);
                throw new Error("Failed to create data");
            }
        };
    }
}
exports.ReceiptData = ReceiptData;
