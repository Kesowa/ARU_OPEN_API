import { Date, DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IUser {
    _id: MongoId,
    tenantId: MongoId,
    userGroupId: MongoId,
    name: string,
    phoneNo: string,
    email: string,
    password: string,
    createdBy: MongoId,
    updatedBy: MongoId,
    userType: string,
    customPermissions: MongoId[],
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
