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
        // get data from database 
        const ordersResults = yield orders_model_1.default.find({});
        // send response 
        res.status(201).json({
            success: true,
            message: "Orders Retrieved Successfully",
            data: ordersResults
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(201).json({
                success: false,
                message: error.message,
                data: null
            });
        }
    }
});
exports.getAllBookingOrder = getAllBookingOrder;
// Get A Booking Order 
const getABookingOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get order object id 
        const paramId = req.params.id;
        // get order from db 
        const orderResult = yield orders_model_1.default.findById(paramId);
        // send response 
        res.status(201).json({
            success: true,
            message: "Order Retrieved Successfully",
            data: orderResult
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(201).json({
                success: false,
                message: error.message,
                data: null
            });
        }
    }
    ;
});
exports.getABookingOrder = getABookingOrder;
