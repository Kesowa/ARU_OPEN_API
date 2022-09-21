import { Date, DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";
import { IUserGroupPermissions } from "./usergroup";

export interface IUserBase {
    _id: MongoId,
    name: string,
    phoneNo: string,
    email: string,
    password: string,
    userType: string,
    dob: Date,
    aadhaarNo: string,
    pilotLicenceNo: string,
    isActive: boolean,
    isBanned: boolean,
    isTermsAccepted: boolean,
    city?: string,
    country?: string,
    expiryDatee?: Date,
    avatar: string,
    passwordResetToken: string,
    createdAt: DateTime,
    updatedAt: DateTime,
}

export interface IUserCustomPermission extends IUserBase {
    tenantId: MongoId,
    userGroupId: MongoId,
    createdBy: MongoId,
    updatedBy: MongoId,
    customPermissions: IUserGroupPermissions[],
}

export interface IUserLink {
    tenantId: MongoId,
    userGroupId: MongoId,
    createdBy: MongoId,
    updatedBy: MongoId,
    customPermissions: MongoId[],
}

export interface IUser extends IUserBase, IUserLink {}
