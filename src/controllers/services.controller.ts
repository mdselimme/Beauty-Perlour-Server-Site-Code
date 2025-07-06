import { Request, Response } from "express";
import Services from "../models/services.model";


// Get All Serivices 
export const getAllServices = async (req: Request, res: Response) => {
    try {
        const servicesData = await Services.find({});
        res.json(servicesData);
    } catch (error) {
        if (error instanceof Error) {
            res.json({ message: error.message });
        } else {
            res.json({ message: 'An unknown error occurred.' });
        }
    }
};

// Get A Single Services by id
export const getASingleService = async (req: Request, res: Response) => {
    try {
        const paramId = req.params.id;
        const serviceData = await Services.findById(paramId);
        res.json(serviceData);
    } catch (error) {
        if (error instanceof Error) {
            res.json({ message: error.message });
        } else {
            res.json({ message: 'An unknown error occurred.' });
        }
    };
}