import { MongoId } from "../utils";

export interface ILayer {
    _id: MongoId,
    type: string,
    raster: MongoId;
    vector: MongoId;
    missionId: MongoId,
    tenantId: MongoId,
    createdBy: MongoId,
    updatedBy: MongoId,
    layerGroupId: MongoId,
    captureDate: Date,
    color: string,
    layerpath: string,
    name: string,
    layerdataArr: [{}];
    //here why arent we creating an array 
    center: [{}],
    minp: number,
    maxp: number,
    featureCount: number,
    layers?: MongoId[],
    layerLabel?: string,
    isPublic: boolean,
    isBase: boolean,
    fileSize: number,
    createdAt: Date,
    updatedAt: Date,
}
