import { DateTime } from "@airtasker/spot"
import { MongoId } from "../misc"

export interface ITenantBase {
    _id: MongoId,
    name: string,
    phoneNo: string
    email: string,
    contactPerson: string
    registrationNumber: string
    officialWebsite: string,
    avatar: string,
    gstNumber: string,
    billingAddressLine1: string,
    billingAddressLine2: string,
    billingCity: string
    billingDistrict: string,
    billingState: string,
    billingPin: string,
    isActive: boolean,
    storageUsed: number,
    actualSize: string,
    modefiedEmailRequested: string,
    modefiedEmailRequestedOTPs: number[],
    modefiedphoneNoRequested: string,
    modefiedphoneNoRequestedOTPs: number[],
    bandwidthUsed: number,
    packageStartDate: DateTime,
    actualUserCount: number,
    actualMissionCount: number,
    actualAlertCount: number,
    actualVodCount: number,
    actualLayerCount: number,
    actualClientCount: number,
    actualLocationCount: number,
    actualUserGroupCount: number,
    isActivated: boolean,
    publicMapRef?: string,
    verificationCode: number,
    isVerified: boolean,
    createdAt: DateTime,
    updatedAt: DateTime
}

export interface ITenantLink {
    createdBy: MongoId,
    updatedBy: MongoId,
    activePackage: MongoId,
    upcomingPackages: MongoId[],
}

export interface ITenant extends ITenantBase, ITenantLink {}