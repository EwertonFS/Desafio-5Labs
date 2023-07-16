import  app from "./app"
import { ReceiptController } from "./controller/ReceiptController"
import ShipController from "./controller/ShipController"

const shipController = new ShipController
const receiptController = new ReceiptController


app.get("/cards", shipController.getAllShip)
app.post("/payment",receiptController.createReceiptController)