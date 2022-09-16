import { MongoId } from "../utils";

export interface IAsset {
    _id: MongoId,
    assetName: string,
    userID: MongoId,
    tenantID: MongoId,
    assetInfo: [{
        UIN: string,
        FCID: string,
        serialNO: string,
    }],
    manufactureID: MongoId,

    createdBy: MongoId,
    isActive: boolean,
    modelID: MongoId,
    assetOwner: MongoId,
    manufactureDate: Date,
    createdAt: Date,
    updatedAt: Date,
}
