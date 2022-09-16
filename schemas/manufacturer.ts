import { MongoId } from "../utils"

export interface IManufacturer {
    _id: MongoId,
    name: string,
    address: string,
    nationality: string
    website: string,
    contacts: {
        name: string,
        designation: string,
        Mobile: string,
        email: string
    }[],
    createdAt: Date,
    updatedAt: Date,
    createdBy: MongoId
    tenantID: MongoId,
}
