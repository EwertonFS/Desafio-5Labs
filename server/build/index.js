"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const ReceiptController_1 = require("./controller/ReceiptController");
const ShipController_1 = __importDefault(require("./controller/ShipController"));
const shipController = new ShipController_1.default;
const receiptController = new ReceiptController_1.ReceiptController;
app_1.default.get("/cards", shipController.getAllShip);
app_1.default.post("/payment", receiptController.createReceiptController);
