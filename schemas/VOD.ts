import { MongoId } from "../misc";

export interface IVOD {
  _id: MongoId,
  flightID: MongoId,
  missionID: MongoId,
  videoPath: string,
  thumbnail: string,
  locationID?: MongoId,
  tenantId: MongoId,
  videoName: string,
  fileSize: number,
  isSRT: boolean,
  createdAt: Date,
  updatedAt: Date,
}
