import { MongoId } from "../utils";

export interface ILayerGroup {
    _id: MongoId,
    name: string,
    layers: MongoId[],
    createdBy: MongoId,
    tenantId: MongoId,
    createdAt: Date,
    updatedAt: Date,
}