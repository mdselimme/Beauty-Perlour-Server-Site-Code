import express, { Request, Response } from 'express';
import { services } from '../config/db/mongodb';
const serviceRouter = express.Router({ mergeParams: true });


serviceRouter.get('/', async (req: Request, res: Response) => {
    const servicesData = await services.find({}).toArray();
    console.log(servicesData)
});



export default serviceRouter;