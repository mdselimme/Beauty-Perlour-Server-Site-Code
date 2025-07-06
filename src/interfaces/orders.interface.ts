import { Types } from "mongoose"


export interface IBookingOrder {
    productId: Types.ObjectId,
    name: string,
    email: string,
    phone: string,
    address: {
        district: string,
        subdistrict: string,
        zip: string,
        zipcode: number
    }
};