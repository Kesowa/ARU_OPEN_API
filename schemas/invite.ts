import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IInviteBase {
    _id: MongoId,
    valid: boolean,
    email: string,
    createdAt: DateTime,
    updatedAt: DateTime,
}

export interface IInviteLink {
    creator: MongoId,
    missionID: MongoId,
}

export interface IInvite extends IInviteBase, IInviteLink {}