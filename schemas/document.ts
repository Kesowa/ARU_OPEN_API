import { DateTime, Date } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IDocumentBase {
    _id: MongoId,
    name: string,
    modDate: Date,
    fileSize: number,
    fileType?: string,
    filePath: string,
    folderName: string,
    createdAt: DateTime,
    updatedAt: DateTime,

};

export interface IDocumentLink {
    createdBy: MongoId,
    updatedBy: MongoId,
    missionId: MongoId,
    tenantId: MongoId,
}   