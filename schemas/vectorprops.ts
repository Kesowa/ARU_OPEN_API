import { MongoId } from "../utils";

export interface IVector {
    _id: MongoId,
    name: string,
    type: 'Point' | 'MultiLineString' | 'MultiPolygon',
    createdBy: MongoId,
    updatedBy: MongoId,
    createdAt: Date,
    updatedAt: Date,
};
