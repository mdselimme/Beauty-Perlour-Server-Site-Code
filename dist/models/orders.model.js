"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrdersBookingSchemaModel = new mongoose_1.Schema({
    serviceId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "services id is required"],
        trim: true
    },
    name: {
        type: String,
        required: [true, "name is required"],
        trim: true,
        minlength: [3, "min name length is 3 character"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true,
    },
    phone: {
        type: String,
        required: [true, "phone is required"],
        trim: true,
    },
    address: {
        district: {
            type: String,
            required: [true, "district is required"],
            trim: true,
        },
        subdistrict: {
            type: String,
            required: [true, "sub-district is required"],
            trim: true,
        },
        zip: {
            type: String,
            required: [true, "zip is required"],
            trim: true,
        },
        zipcode: {
            type: Number,
            required: [true, "zipcode is required"],
            trim: true,
        },
    },
});
const OrdersBooking = (0, mongoose_1.model)("ordersBooking", OrdersBookingSchemaModel);
exports.default = OrdersBooking;
