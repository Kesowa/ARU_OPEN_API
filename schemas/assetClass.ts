import { DateTime, String } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IAssetClass {
    _id: MongoId,
    typeName: String,
    createdAt: DateTime,
    createdBy: MongoId
}