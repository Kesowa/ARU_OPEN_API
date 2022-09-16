import { MongoId } from "./misc";

export interface IAssetClass {
    _id: MongoId,
    typeName: string,
    createdAt: Date,
    createdBy: MongoId
}