import express, { Request, Response } from "express";
const app = express();
import cors from "cors";

app.use(cors());


// IMPORT ALL ROUTER 
import serviceRouter from "../routers/service.routes";



// USE ALL ROUTER 
app.use('/services', serviceRouter);


app.get('/', (req: Request, res: Response) => {
    res.send("Jerins Perlour Server Site Running......")
});



export default app;