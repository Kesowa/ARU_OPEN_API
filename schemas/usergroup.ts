import { MongoId } from "../misc";

export interface IUserGroup {
    _id: MongoId,
    name: string,
    permissions: MongoId[],
    tenantId: MongoId,
    createdBy: MongoId,
    updatedBy: MongoId,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date,
}