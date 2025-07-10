import { Types } from "mongoose"


interface IAddress {
    district: string,
    subdistrict: string,
    zip: string,
    zipcode: number

}


export interface IBookingOrder {
    serviceId: Types.ObjectId,
    name: string,
    email: string,
    phone: string,
    address: IAddress
};