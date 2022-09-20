import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IVODBase {
  _id: MongoId,
  videoPath: string,
  thumbnail: string,
  videoName: string,
  fileSize: number,
  isSRT: boolean,
  createdAt: DateTime,
  updatedAt: DateTime,
}

export interface IVODLink {
  flightID: MongoId,
  missionID: MongoId,
  locationID?: MongoId,
  tenantId: MongoId,
}

export interface IVOD extends IVODBase, IVODLink {}