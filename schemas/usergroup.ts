import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";
import { IPermission } from "./permission";

export interface IUserGroupBase {
    _id: MongoId,
    name: string,
    isActive: boolean,
    createdAt: DateTime,
    updatedAt: DateTime,
}

export interface IUserGroupPermissions extends IUserGroupBase {
    permissions: IPermission[],
    tenantId: MongoId,
    createdBy: MongoId,
    updatedBy: MongoId,
}

export interface IUserGroupLink {
    permissions: MongoId[],
    tenantId: MongoId,
    createdBy: MongoId,
    updatedBy: MongoId,
}

export interface IUserGroup extends IUserGroupBase, IUserGroupLink {}