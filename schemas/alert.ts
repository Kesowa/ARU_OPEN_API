import { FilePath, MongoId } from "../misc";
import { DateTime, Float, Integer } from "@airtasker/spot";
import { IFlight } from "./flight";
import { IMission } from "./mission";
import { IUser } from "./user";

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

export interface IAlertMissionCreatedFlight extends IAlertBase {
  missionId: IMission,
  createdBy: IUser,
  flightId: IFlight,
}

export interface IAlertLink {
  missionId: MongoId,
  createdBy: MongoId,
  flightId: MongoId,
  tenantId: MongoId,
}

export interface IAlert extends IAlertBase, IAlertLink {};