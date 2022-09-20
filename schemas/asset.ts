import { Date, DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IAssetBase {
    _id: MongoId,
    assetName: string,
    assetInfo: AssetInfo[],
    isActive: boolean,
    manufactureDate: Date,
    createdAt: DateTime,
    updatedAt: DateTime,
}

export interface IAssetLink {
    userID: MongoId,
    tenantID: MongoId,
    manufactureID: MongoId,
    createdBy: MongoId,
    modelID: MongoId,
    assetOwner: MongoId,
}

export interface IAsset extends IAssetBase, IAssetLink {}

export interface AssetInfo {
    UIN: string,
    FCID: string,
    serialNO: string,
}