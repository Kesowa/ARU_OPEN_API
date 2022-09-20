import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IStreamKeyBase {
    _id: MongoId,
    isActive: boolean,
    pStatus: boolean,
    streamKey: string,
    createdAt: DateTime,
    updatedAt: DateTime,
}

export interface IStreamKeyLink {
    createdBy: MongoId,
    tenantID: MongoId,
    assetID?: MongoId,
    missionID: MongoId,
    flightID: MongoId,
    locationID?: MongoId,
}

export interface IStreamKey extends IStreamKeyBase, IStreamKeyLink {}