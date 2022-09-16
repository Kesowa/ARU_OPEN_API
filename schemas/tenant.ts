import { MongoId } from "./misc"

export interface ITenant {
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
    createdBy: MongoId,
    updatedBy: MongoId,
    upcomingPackages: [],
    isActive: boolean,
    storageUsed: number,
    actualSize: string,
    modefiedEmailRequested: string,
    modefiedEmailRequestedOTPs: number[],
    modefiedphoneNoRequested: string,
    modefiedphoneNoRequestedOTPs: number[],
    activePackage: MongoId,
    bandwidthUsed: number,
    packageStartDate: Date,
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
    createdAt: Date,
    updatedAt: Date
}
