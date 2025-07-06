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
exports.getASingleService = exports.getAllServices = void 0;
const services_model_1 = __importDefault(require("../models/services.model"));
// Get All Serivices 
const getAllServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // call from database 
        const servicesResults = yield services_model_1.default.find({});
        // send response 
        res.status(201).json({
            success: true,
            message: "Service Retrieved Successfully",
            data: servicesResults
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
exports.getAllServices = getAllServices;
// Get A Single Services by id
const getASingleService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // object id 
        const paramId = req.params.id;
        // get service from database 
        const serviceResult = yield services_model_1.default.findById(paramId);
        // send response 
        res.status(201).json({
            success: true,
            message: "Service Retrieved Successfully",
            data: serviceResult
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
exports.getASingleService = getASingleService;
