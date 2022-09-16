import { MongoId } from "../misc";

export interface IFlightLog {
    _id: MongoId,
    date: Date,
    time: Date,
    missionID: MongoId ,
    flightID: MongoId ,
    assetID: MongoId ,
    locationID?: MongoId ,
    duration: string,
    location: string,
    geofence: {},
    flightArea: string,
    filePath: string,
    pilotName: string,
    jobType: string,
    deliverables: string[],
    tenantId: MongoId
}
