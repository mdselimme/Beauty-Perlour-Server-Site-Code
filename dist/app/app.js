"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)());
// IMPORT ALL ROUTER 
const service_routes_1 = __importDefault(require("../routers/service.routes"));
const users_routes_1 = __importDefault(require("../routers/users.routes"));
const orders_routes_1 = __importDefault(require("../routers/orders.routes"));
// USE ALL ROUTER 
app.use('/services', service_routes_1.default);
app.use('/users', users_routes_1.default);
app.use('/orders', orders_routes_1.default);
app.get('/', (req, res) => {
    res.send("Jerins Perlour Server Site Running...");
});
exports.default = app;
