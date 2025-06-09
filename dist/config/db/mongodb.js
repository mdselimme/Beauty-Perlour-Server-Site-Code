"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders = exports.services = exports.client = void 0;
const mongodb_1 = require("mongodb");
require("dotenv/config");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hf2pl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
exports.client = new mongodb_1.MongoClient(uri, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const db = exports.client.db("BeautifulPerlour");
exports.services = db.collection("service");
exports.orders = db.collection("bookorder");
