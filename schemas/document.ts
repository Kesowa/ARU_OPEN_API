import { MongoId } from "./misc";

export interface IDocument {
    _id: MongoId,
    name: string,
    modDate: Date,
    fileSize: number,
    fileType?: string,
    filePath: string,
    folderName: string,
    createdBy: MongoId,
    updatedBy: MongoId,
    missionId: MongoId,
    tenantId: MongoId,
    createdAt: Date,
    updatedAt: Date,

};
