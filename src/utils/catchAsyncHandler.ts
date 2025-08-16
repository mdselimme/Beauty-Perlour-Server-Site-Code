import { NextFunction, Request, Response } from "express";


type CatchAsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;


export const catchAsyncHandler = (func: CatchAsyncHandler) =>
    (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(func(req, res, next))
            .catch((error: any) => {
                next(error);
            });
    };