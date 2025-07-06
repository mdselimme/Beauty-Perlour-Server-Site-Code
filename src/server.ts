import mongoose from "mongoose";
import app from "./app/app";
const PORT = process.env.PORT || 5000;


let server;

const bootstrap = async () => {
    try {
        const databaseUrl: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hf2pl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        await mongoose.connect(databaseUrl);
        console.log('Connect to Mongodb');
        server = app.listen(PORT, () => {
            console.log(`Server site Running: http://localhost:${PORT}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
};

bootstrap();