import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IPackageBase {
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
    isActive: boolean,
    createdAt: DateTime,
    updatedAt: DateTime,
}

export interface IPackageLink {
    createdBy: MongoId,
    updatedBy: MongoId,
}

export interface IPackage extends IPackageBase, IPackageLink { }