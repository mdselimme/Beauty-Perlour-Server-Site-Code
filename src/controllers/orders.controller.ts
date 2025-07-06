import { Request, Response } from "express";
import OrdersBooking from "../models/orders.model";



// Get All Bookings Orders 
export const getAllBookingOrder = async (req: Request, res: Response) => {
    try {
        // get data from database 
        const ordersResults = await OrdersBooking.find({});
        // send response 
        res.status(201).json({
            success: true,
            message: "Orders Retrieved Successfully",
            data: ordersResults
        });
    } catch (error) {
        if (error instanceof Error) {
            res.status(201).json({
                success: false,
                message: error.message,
                data: null
            });
        }
    }
};

// Get A Booking Order 
export const getABookingOrder = async (req: Request, res: Response) => {
    try {
        // get order object id 
        const paramId = req.params.id;
        // get order from db 
        const orderResult = await OrdersBooking.findById(paramId);
        // send response 
        res.status(201).json({
            success: true,
            message: "Order Retrieved Successfully",
            data: orderResult
        });
    } catch (error) {
        if (error instanceof Error) {
            res.status(201).json({
                success: false,
                message: error.message,
                data: null
            });
        }
    };
}