import { MongoId } from "../misc";

export interface IInvite {
    _id: MongoId,
    valid: boolean,
    creator: MongoId,
    missionID: MongoId,
    email: string,
    createdAt: Date,
    updatedAt: Date,
}
