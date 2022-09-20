import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IPermissionBase {
    name: string,
    isSideNavOption: boolean,
    isFrontendRoute: boolean,
    isPilot: boolean,
    isClient: boolean,
    frontendRoute?: string,
    isVisibleToTenant: boolean,
    isVisibleToSuperAdmin: boolean,
    sideNavOptionLabel: string,
    sideNavOptionIcon: string,
    description: string
    isActive: boolean,
    createdAt: DateTime,
    updatedAt: DateTime,
}

export interface IPermissionLink {
    createdBy: MongoId,
    updatedBy: MongoId,
}

export interface IPermission extends IPermissionBase, IPermissionLink {}