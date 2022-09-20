import { FilePath, MongoId } from "../misc";
import { DateTime, Float, Integer } from "@airtasker/spot";

export interface IAlertBase {
  _id: MongoId,
  location: {
    lat?: Float,
    long?: Float,
  },
  locationName: string,
  fileSize: Float,
  note?: string,
  onSite?: boolean,
  pcount: Integer,
  type?: string,
  image: FilePath,
  locationId?: MongoId,
  createdAt: DateTime,
  updatedAt: DateTime,
}

export interface IAlertLink {
  missionId: MongoId,
  createdBy: MongoId,
  flightId: MongoId,
  tenantId: MongoId,
}

export interface IAlert extends IAlertBase, IAlertLink {};