import { FilePath, MongoId } from "../misc";
import { DateTime, Float, Integer } from "@airtasker/spot";

export interface IAlert {
  _id: MongoId,
  missionId: MongoId;
  location: {
    lat?: Float,
    long?: Float,
  },
  locationName: string,
  fileSize: Float,
  note?: string,
  createdBy: MongoId,
  onSite?: boolean,
  flightId: MongoId,
  tenantId: MongoId,
  pcount: Integer,
  type?: string,
  image: FilePath,
  locationId?: MongoId,
  createdAt: DateTime,
  updatedAt: DateTime,
}