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
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("../config/db/mongodb");
const mongodb_2 = require("mongodb");
const serviceRouter = express_1.default.Router({ mergeParams: true });
// GET ALL SERVICES DATA 
serviceRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const servicesData = yield mongodb_1.services.find({}).toArray();
        res.json(servicesData);
    }
    catch (error) {
        if (error instanceof Error) {
            res.json({ message: error.message });
        }
        else {
            res.json({ message: 'An unknown error occurred.' });
        }
    }
}));
// GET SINGLE SERVICE DATA BY ID FROM SERVICES 
serviceRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paramId = req.params.id;
        const query = { _id: new mongodb_2.ObjectId(paramId) };
        const serviceData = yield mongodb_1.services.findOne(query);
        res.json(serviceData);
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
}));
exports.default = serviceRouter;
