import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
app.use(cors());


// IMPORT ALL ROUTER 
import serviceRouter from "../routers/service.routes";
import usersRouter from "../routers/users.routes";
import ordersRouter from "../routers/orders.routes";



// USE ALL ROUTER 
app.use('/services', serviceRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);


app.get('/', (req: Request, res: Response) => {
    res.send("Jerins Perlour Server Site Running...")
});

app.use((req: Request, res: Response) => {
    res.json({
        message: "No Route Match."
    })
});


export default app;