import { MongoId } from "./misc";

export interface IStreamKey {
    _id: MongoId,
    isActive: boolean,
    pStatus: boolean,
    createdBy: MongoId,
    streamKey: string,
    tenantID: MongoId,
    assetID?: MongoId,
    missionID: MongoId,
    flightID: MongoId,
    locationID?: MongoId,
    createdAt: Date,
    updatedAt: Date,
}
