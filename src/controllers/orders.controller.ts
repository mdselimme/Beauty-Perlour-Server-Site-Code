import { Request, Response } from "express";
import OrdersBooking from "../models/orders.model";



// Get All Bookings Orders 
export const getAllBookingOrder = async (req: Request, res: Response) => {
    try {
        const ordersData = await OrdersBooking.find({});
        res.json(ordersData);
    } catch (error) {
        if (error instanceof Error) {
            res.json({ message: error.message });
        } else {
            res.json({ message: 'An unknown error occurred.' });
        }
    }
};

// Get A Booking Order 
export const getABookingOrder = async (req: Request, res: Response) => {
    try {
        const paramId = req.params.id;
        const orderData = await OrdersBooking.findById(paramId);
        res.json(orderData);
    } catch (error) {
        if (error instanceof Error) {
            res.json({ message: error.message });
        } else {
            res.json({ message: 'An unknown error occurred.' });
        }
    };
}