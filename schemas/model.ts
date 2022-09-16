import { MongoId } from "./misc";

export interface IModel {
    _id: MongoId,
    modelName: string,
    modelNumber?: string,
    assetClassID: MongoId,
    dimensions?: {
        length: number,
        breadth: number,
        height: number
    },
    manufacturerID: MongoId,
    website?: string,
    createdBy: MongoId,
    tenantID: MongoId,
    props?: {},
    createdAt: Date,
    updatedAt: Date,
}
