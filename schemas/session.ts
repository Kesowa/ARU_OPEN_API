import { MongoId } from "../misc";

export interface ISession {
  _id: MongoId,
  valid: boolean,
  owner: MongoId,
  createdAt: Date,
  updatedAt: Date,
}
