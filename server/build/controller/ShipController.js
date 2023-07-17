"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShipBusiness_1 = __importDefault(require("../business/ShipBusiness"));
const shipBusiness = new ShipBusiness_1.default;
class ShipController {
    constructor() {
        this.getAllShip = async (req, res) => {
            try {
                const result = await shipBusiness.getAllShippBusiness();
                res.status(200).send(result);
            }
            catch (error) {
                res.status(500).send("Erro");
                console.log(error);
            }
        };
    }
}
exports.default = ShipController;
