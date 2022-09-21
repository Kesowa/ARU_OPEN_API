import { Date, DateTime } from "@airtasker/spot";
import { Color, MongoId } from "../misc";
import { IRaster } from "./rasterprops";
import { IVector } from "./vectorprops";

export interface ILayerBase {
    _id: MongoId,
    type: string,
    captureDate: Date,
    color: Color,
    layerpath: string,
    name: string,
    layerdataArr: {}[];
    //here why arent we creating an array 
    center: {}[],
    minp: number,
    maxp: number,
    featureCount: number,
    layers?: MongoId[],
    layerLabel?: string,
    isPublic: boolean,
    isBase: boolean,
    fileSize: number,
    createdAt: DateTime,
    updatedAt: DateTime,
}

export interface ILayerLink {
    raster: MongoId,
    vector: MongoId,
    missionId: MongoId,
    tenantId: MongoId,
    createdBy: MongoId,
    updatedBy: MongoId,
    layerGroupId: MongoId,
}

export interface ILayerRasterVector extends ILayerBase {
    raster: IRaster,
    vector: IVector,
    missionId: MongoId,
    tenantId: MongoId,
    createdBy: MongoId,
    updatedBy: MongoId,
    layerGroupId: MongoId,
}

export interface ILayer extends ILayerBase, ILayerLink {}