"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getABookingOrder = exports.getAllBookingOrder = void 0;
const orders_model_1 = __importDefault(require("../models/orders.model"));
// Get All Bookings Orders 
const getAllBookingOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ordersData = yield orders_model_1.default.find({});
        res.json(ordersData);
    }
    catch (error) {
        if (error instanceof Error) {
            res.json({ message: error.message });
        }
        else {
            res.json({ message: 'An unknown error occurred.' });
        }
    }
});
exports.getAllBookingOrder = getAllBookingOrder;
// Get A Booking Order 
const getABookingOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paramId = req.params.id;
        const orderData = yield orders_model_1.default.findById(paramId);
        res.json(orderData);
    }
    catch (error) {
        if (error instanceof Error) {
            res.json({ message: error.message });
        }
        else {
            res.json({ message: 'An unknown error occurred.' });
        }
    }
    ;
});
exports.getABookingOrder = getABookingOrder;
