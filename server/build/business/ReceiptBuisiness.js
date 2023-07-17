"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceipBusiness = void 0;
const ReceiptData_1 = require("../data/ReceiptData");
const receiptData = new ReceiptData_1.ReceiptData;
class ReceipBusiness {
    constructor() {
        this.createReceipBusiness = (firstName, lastName, telephone, email, document, cep, logradouro, gia, complemento, bairro, localidade, uf, paymentMethod, cardNumber, cardExpiration, cardHolderName, cardCvv) => {
            try {
                const result = receiptData.createData(firstName, lastName, telephone, email, document, cep, logradouro, gia, complemento, bairro, localidade, uf, paymentMethod, cardNumber, cardExpiration, cardHolderName, cardCvv);
                return result;
            }
            catch (error) {
            }
        };
    }
}
exports.ReceipBusiness = ReceipBusiness;
