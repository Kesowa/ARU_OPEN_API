import { MongoId } from "../misc";

export interface IMission {
  _id: MongoId,
  deliverables?: string[];
  status?: string;
  user: MongoId,
  pilotAssigned?: string
  assetID?: MongoId;
  name: string,
  description: string,
  tenantId?: MongoId,
  clientId?: MongoId[],
  missionType: MongoId,
  invites?: MongoId[],
  createdAt: Date,
  updatedAt: Date,
}
