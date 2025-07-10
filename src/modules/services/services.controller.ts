import { Request, Response } from "express";
import Services from "./services.model";


// Get All Serivices 
export const getAllServices = async (req: Request, res: Response) => {
    try {
        // call from database 
        const servicesResults = await Services.find({});
        // send response 
        res.status(201).json({
            success: true,
            message: "Service Retrieved Successfully",
            data: servicesResults
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

// Get A Single Services by id
export const getASingleService = async (req: Request, res: Response) => {
    try {
        // object id 
        const paramId = req.params.id;
        // get service from database 
        const serviceResult = await Services.findById(paramId);
        // send response 
        res.status(201).json({
            success: true,
            message: "Service Retrieved Successfully",
            data: serviceResult
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