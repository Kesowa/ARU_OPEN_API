import { String, Date } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IAsset {
    _id: MongoId,
    assetName: String,
    userID: MongoId,
    tenantID: MongoId,
    assetInfo: AssetInfo[],
    manufactureID: MongoId,

    createdBy: MongoId,
    isActive: boolean,
    modelID: MongoId,
    assetOwner: MongoId,
    manufactureDate: Date,
    createdAt: Date,
    updatedAt: Date,
}

export interface AssetInfo {
    UIN: String,
    FCID: String,
    serialNO: String,
}