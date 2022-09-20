import { MongoId } from "../misc";

export interface ILayerFileBase {
    _id: MongoId,
    name: string,
    sys_Id?: string,
    featureLabel?: string,
    centerPoints?: { lat: number, lng: number },
    coverPhoto: boolean,
    filePath: string,
    fileType: string,
    isReview: boolean,
    fileSize: number,
    createdAt: Date,
    updatedAt: Date,
}

export interface ILayerFileLink {
    layerId: MongoId,
    layers: MongoId[],
    tenantId: MongoId,
    createdBy: MongoId,
    updatedBy: MongoId,
}

export interface ILayerFile extends ILayerFileBase, ILayerFileLink {}