import express, { Request, Response } from "express";
const app = express();


app.get('/', (req: Request, res: Response) => {
    res.send("Jerins Perlour Server Site Running.")
});



export default app;