import express, { Request, Response } from "express";
import { orders } from "../config/db/mongodb";
import { ObjectId } from "mongodb";
const ordersRouter = express.Router({ mergeParams: true });



// GET ALL Orders DATA 
ordersRouter.get('/', async (req: Request, res: Response) => {
    try {
        const ordersData = await orders.find({}).toArray();
        res.json(ordersData);
    } catch (error) {
        if (error instanceof Error) {
            res.json({ message: error.message });
        } else {
            res.json({ message: 'An unknown error occurred.' });
        }
    }
});


// GET SINGLE Order DATA BY ID FROM Orders 
ordersRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const paramId = req.params.id;
        const query = { _id: new ObjectId(paramId) };
        const orderData = await orders.findOne(query);
        res.json(orderData);
    } catch (error) {
        if (error instanceof Error) {
            res.json({ message: error.message });
        } else {
            res.json({ message: 'An unknown error occurred.' });
        }
    };
});



export default ordersRouter;