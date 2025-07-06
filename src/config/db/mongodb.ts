import { MongoClient, ServerApiVersion } from "mongodb";
import 'dotenv/config'



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hf2pl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const db = client.db("BeautifulPerlour");
export const services = db.collection("service");
export const orders = db.collection("bookorder");