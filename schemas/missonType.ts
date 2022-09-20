import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IMissionTypeBase {
    _id: MongoId,
    name: string,
    description: string
    isActive: boolean,
    createdAt: DateTime,
    updatedAt: DateTime,
}

export interface IMissionTypeLink {
    createdBy: MongoId,
    updatedBy: MongoId,
}

export interface IMisisonType extends IMissionTypeBase, IMissionTypeLink {}