"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShipData_1 = __importDefault(require("../data/ShipData"));
const shipData = new ShipData_1.default;
class ShipBusiness {
    constructor() {
        this.getAllShippBusiness = async () => {
            const result = await shipData.getData();
            return result;
        };
    }
}
exports.default = ShipBusiness;
