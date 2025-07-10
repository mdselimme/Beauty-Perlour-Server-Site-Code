import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
app.use(cors());


// IMPORT ALL ROUTER 
import serviceRouter from "../modules/services/service.routes";
import usersRouter from "../modules/users/users.routes";
import ordersRouter from "../modules/orders/orders.routes";




// USE ALL ROUTER 
app.use('api/v1/services', serviceRouter);
app.use('api/v1/users', usersRouter);
app.use('api/v1/orders', ordersRouter);


app.get('/', (req: Request, res: Response) => {
    res.send("Jerins Perlour Server Site Running...")
});

app.use((req: Request, res: Response) => {
    res.json({
        message: "No Route Match."
    })
});


export default app;