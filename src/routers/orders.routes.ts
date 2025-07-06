import express from "express";
import { getABookingOrder, getAllBookingOrder } from "../controllers/orders.controller";
const ordersRouter = express.Router({ mergeParams: true });



// GET ALL Orders DATA 
ordersRouter.get('/', getAllBookingOrder);

// GET SINGLE Order DATA BY ID FROM Orders 
ordersRouter.get('/:id', getABookingOrder);



export default ordersRouter;