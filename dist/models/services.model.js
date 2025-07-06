"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ServicesSchemaModel = new mongoose_1.Schema({
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
                return val !== 0 && typeof val === "number";
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
const Services = (0, mongoose_1.model)("Services", ServicesSchemaModel);
exports.default = Services;
