import { model, Schema } from "mongoose";
import { IServices } from "./services.interface";


const ServicesSchemaModel = new Schema<IServices>({
    title: {
        type: String,
        required: [true, "title is required"],
        minlength: [3, "Min 3 characters long"],
        trim: true
    },
    imageLink: {
        type: String,
        required: [true, "image link is required"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "price is required"],
        trim: true,
        validate: {
            validator: (val) => {
                return val !== 0 && typeof val === "number"
            }
        }
    },
    description: {
        type: String,
        required: [true, "description is required"],
        trim: true
    },
}, {
    versionKey: false,
    timestamps: true
});

const Services = model("Services", ServicesSchemaModel);

export default Services;