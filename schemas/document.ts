import { DateTime, Date } from "@airtasker/spot";
import { FilePath, MongoId } from "../misc";

export interface IDocumentBase {
    _id: MongoId,
    name: string,
    modDate: Date,
    fileSize: number,
    fileType?: string,
    filePath: FilePath,
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

export interface IDocument extends IDocumentBase, IDocumentLink {}