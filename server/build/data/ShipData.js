"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
class ShipData {
    constructor() {
        this.getData = async () => {
            const result = data_1.shipsStock.map((nav) => nav);
            return result;
        };
    }
}
exports.default = ShipData;
