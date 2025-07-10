import express from 'express';
import { getAllServices, getASingleService } from './services.controller';
const serviceRouter = express.Router({ mergeParams: true });


// GET ALL SERVICES DATA 
serviceRouter.get('/', getAllServices);

// GET SINGLE SERVICE DATA BY ID FROM SERVICES 
serviceRouter.get('/:id', getASingleService);


export default serviceRouter;