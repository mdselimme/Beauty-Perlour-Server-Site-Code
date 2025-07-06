"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orders_controller_1 = require("../controllers/orders.controller");
const ordersRouter = express_1.default.Router({ mergeParams: true });
// GET ALL Orders DATA 
ordersRouter.get('/', orders_controller_1.getAllBookingOrder);
// GET SINGLE Order DATA BY ID FROM Orders 
ordersRouter.get('/:id', orders_controller_1.getABookingOrder);
exports.default = ordersRouter;
