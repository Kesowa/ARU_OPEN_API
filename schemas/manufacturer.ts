import { MongoId } from "../misc"

export interface IManufacturerBase {
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
}

export interface IManufacturerLink {
    createdBy: MongoId
    tenantID: MongoId,
}

export interface IManufacturer extends IManufacturerBase, IManufacturerLink {}