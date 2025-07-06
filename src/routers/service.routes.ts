import express, { Request, Response } from 'express';
import { services } from '../config/db/mongodb';
import { ObjectId } from 'mongodb';
const serviceRouter = express.Router({ mergeParams: true });


// GET ALL SERVICES DATA 
serviceRouter.get('/', async (req: Request, res: Response) => {
    try {
        const servicesData = await services.find({}).toArray();
        res.json(servicesData);
    } catch (error) {
        if (error instanceof Error) {
            res.json({ message: error.message });
        } else {
            res.json({ message: 'An unknown error occurred.' });
        }
    }
});

// GET SINGLE SERVICE DATA BY ID FROM SERVICES 
serviceRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const paramId = req.params.id;
        const query = { _id: new ObjectId(paramId) };
        const serviceData = await services.findOne(query);
        res.json(serviceData);
    } catch (error) {
        if (error instanceof Error) {
            res.json({ message: error.message });
        } else {
            res.json({ message: 'An unknown error occurred.' });
        }
    };
});




export default serviceRouter;