import { MongoId } from "../misc";

export interface ILayerGroupBase {
    _id: MongoId,
    name: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface ILayerGroupLink {
    layers: MongoId[],
    createdBy: MongoId,
    tenantId: MongoId,
}

export interface ILayerGroup extends ILayerGroupBase, ILayerGroupLink {}