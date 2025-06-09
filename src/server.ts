import app from "./app/app";
import { client } from "./db/mongodb";
const PORT = process.env.PORT || 5000;


let server;

const bootstrap = async () => {
    try {
        await client.connect();
        console.log('Connect to Mongodb');
        server = app.listen(PORT, () => {
            console.log(`Server site Running: http://localhost:${PORT}`);
        });
    } catch (error) {

    }
};

bootstrap();