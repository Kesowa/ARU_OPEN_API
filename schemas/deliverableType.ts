import { MongoId } from "../utils";

export interface IDeliverableType {
    _id: MongoId,
    name: string,
    description: string,
    createdBy: MongoId,
    updatedBy: MongoId,
    imageURL?: string,
    isActive?: boolean
    createdAt: Date,
    updatedAt: Date,

}
