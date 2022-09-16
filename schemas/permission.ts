import { MongoId } from "../misc";

export interface IPermission {
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
    createdBy: MongoId,
    updatedBy: MongoId,
    isActive: boolean,
    createdAt: Date,
    updatedAt: Date,
}
