import { MongoId } from "../misc";

export interface IAlert {
  _id: MongoId,
  missionId: MongoId;
  location: {
    lat?: number,
    long?: number,
  },
  locationName: string,
  fileSize: number,
  note?: string,
  createdBy: MongoId,
  onSite?: boolean,
  flightId: MongoId,
  tenantId: MongoId,
  pcount: number,
  type?: string,
  image: string,
  locationId?: MongoId,
  createdAt: Date,
  updatedAt: Date,
}