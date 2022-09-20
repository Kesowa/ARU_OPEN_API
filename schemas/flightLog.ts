import { Date, DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IFlightLogBase {
    _id: MongoId,
    date: Date,
    time: DateTime,
    duration: string,
    location: string,
    geofence: {},
    flightArea: string,
    filePath: string,
    pilotName: string,
    jobType: string,
    deliverables: string[],
}

export interface IFlightLogLink {
    missionID: MongoId,
    flightID: MongoId,
    assetID: MongoId,
    locationID?: MongoId,
    tenantId: MongoId
}

export interface IFlightLog extends IFlightLogBase, IFlightLogLink {}