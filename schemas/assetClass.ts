import { MongoId } from "../utils";

export interface IAssetClass {
    _id: MongoId,
    typeName: string,
    createdAt: Date,
    createdBy: MongoId
}