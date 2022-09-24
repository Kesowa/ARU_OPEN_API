import { DateTime } from "@airtasker/spot";
import { FilePath, MongoId } from "../misc";
import { IFlight } from "./flight";
import { IMission } from "./mission";

export interface IVODBase {
  _id: MongoId,
  /**
   * Relative URL for HSL video. Set extension to .flv for FLV format.
   */
  videoPath: FilePath,
  thumbnail: string,
  videoName: string,
  fileSize: number,
  isSRT: boolean,
  createdAt: DateTime,
  updatedAt: DateTime,
}

export interface IVODFlightMission extends IVODBase {
  flightID: IFlight,
  missionID: IMission,
  locationID?: MongoId,
  tenantId: MongoId,
}

export interface IVODLink {
  flightID: MongoId,
  missionID: MongoId,
  locationID?: MongoId,
  tenantId: MongoId,
}

export interface IVOD extends IVODBase, IVODLink {}