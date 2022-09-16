import { MongoId } from "./misc";

export interface IPackage {
    name: string,
    bandwidth: number,
    storage: number,
    duration: number,
    userCount: number,
    missionCount: number,
    alertCount: number,
    vodCount: number,
    layerCount: number,
    clientCount: number,
    locationCount: number,
    userGroupCount: number,
    poster: string,
    price: number,
    createdBy: MongoId,
    updatedBy: MongoId,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date,
}
