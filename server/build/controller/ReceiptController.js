"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptController = void 0;
const ReceiptBuisiness_1 = require("../business/ReceiptBuisiness");
const receiptBusiness = new ReceiptBuisiness_1.ReceipBusiness;
class ReceiptController {
    constructor() {
        this.createReceiptController = async (req, res) => {
            try {
                const { firstName, lastName, telephone, email, document, cep, logradouro, gia, complemento, bairro, localidade, uf, paymentMethod, cardNumber, cardExpiration, cardHolderName, cardCvv, } = req.body;
                const result = await receiptBusiness.createReceipBusiness(firstName, lastName, telephone, email, document, cep, logradouro, gia, complemento, bairro, localidade, uf, paymentMethod, cardNumber, cardExpiration, cardHolderName, cardCvv);
                res.status(200).json(result);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Internal server error" });
            }
        };
    }
}
exports.ReceiptController = ReceiptController;
