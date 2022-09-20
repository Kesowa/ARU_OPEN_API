import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IAssetClassBase {
    _id: MongoId,
    typeName: string,
    createdAt: DateTime,
    createdBy: MongoId
}

export interface IAssetClassLink {
    _id: MongoId,
    typeName: string,
    createdAt: DateTime,
    createdBy: MongoId
}

export interface IAssetClass extends IAssetClassBase, IAssetClassLink {};