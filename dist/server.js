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
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app/app"));
const PORT = process.env.PORT || 5000;
let server;
const bootstrap = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const databaseUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hf2pl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        yield mongoose_1.default.connect(databaseUrl);
        console.log('Connect to Mongodb');
        server = app_1.default.listen(PORT, () => {
            console.log(`Server site Running: http://localhost:${PORT}`);
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
});
bootstrap();
