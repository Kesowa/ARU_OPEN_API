import { MongoId } from "./misc";

export interface ILayerFile {
    _id: MongoId,
    name: string,
    layerId: MongoId,
    layers: MongoId[],
    sys_Id?: string,
    featureLabel?: string,
    centerPoints?: { lat: number, lng: number },
    coverPhoto: boolean,
    filePath: string,
    fileType: string,
    tenantId: MongoId,
    createdBy: MongoId,
    updatedBy: MongoId,
    isReview: boolean,
    fileSize: number,
    createdAt: Date,
    updatedAt: Date,
}
