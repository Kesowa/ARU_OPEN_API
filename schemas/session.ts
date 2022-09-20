import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface ISessionBase {
  _id: MongoId,
  valid: boolean,
  createdAt: DateTime,
  updatedAt: DateTime,
}

export interface ISessionLink {
  owner: MongoId,
}

export interface ISession extends ISessionBase, ISessionLink {}