import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IMissionBase {
  _id: MongoId,
  deliverables?: string[];
  status?: string;
  pilotAssigned?: string
  name: string,
  description: string,
  createdAt: DateTime,
  updatedAt: DateTime,
}

export interface IMissionLink {
  user: MongoId,
  assetID?: MongoId,
  tenantId?: MongoId,
  clientId?: MongoId[],
  missionType: MongoId,
  invites?: MongoId[],
}

export interface IMission extends IMissionBase, IMissionLink {}