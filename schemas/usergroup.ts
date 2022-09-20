import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IUserGroupBase {
    _id: MongoId,
    name: string,
    isActive: boolean,
    createdAt: DateTime,
    updatedAt: DateTime,
}

export interface IUserGroupLink {
    permissions: MongoId[],
    tenantId: MongoId,
    createdBy: MongoId,
    updatedBy: MongoId,
}

export interface IUserGroup extends IUserGroupBase, IUserGroupLink {}