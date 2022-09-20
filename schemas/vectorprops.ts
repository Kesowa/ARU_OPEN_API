import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IVectorBase {
    _id: MongoId,
    name: string,
    type: 'Point' | 'MultiLinestring' | 'MultiPolygon',
    createdAt: DateTime,
    updatedAt: DateTime,
};

export interface IVectorLink {
    createdBy: MongoId,
    updatedBy: MongoId,
}

export interface IVector extends IVectorBase, IVectorLink {}