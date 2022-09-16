import { MongoId } from "../utils";

export interface IMissionType {
    _id: MongoId,
    name: string,
    description: string
    createdBy: MongoId,
    updatedBy: MongoId,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date,
}