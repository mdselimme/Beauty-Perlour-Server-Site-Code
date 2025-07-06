"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const services_controller_1 = require("../controllers/services.controller");
const serviceRouter = express_1.default.Router({ mergeParams: true });
// GET ALL SERVICES DATA 
serviceRouter.get('/', services_controller_1.getAllServices);
// GET SINGLE SERVICE DATA BY ID FROM SERVICES 
serviceRouter.get('/:id', services_controller_1.getASingleService);
exports.default = serviceRouter;
