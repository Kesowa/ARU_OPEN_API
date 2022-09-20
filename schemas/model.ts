import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IModelBase {
    _id: MongoId,
    modelName: string,
    modelNumber?: string,
    dimensions?: {
        length: number,
        breadth: number,
        height: number
    },
    website?: string,
    props?: {},
    createdAt: DateTime,
    updatedAt: DateTime,
}

export interface IModelLink {
    assetClassID: MongoId,
    manufacturerID: MongoId,
    createdBy: MongoId,
    tenantID: MongoId,
}

export interface IModel extends IModelBase, IModelLink {}