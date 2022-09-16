import { MongoId } from "../misc"

export interface IFlight {
  _id: MongoId,
  name: string,
  description: string
  pilotID: MongoId,
  mission: MongoId,
  date: string,
  time: string,
  duration: string,
  locationID: MongoId,
  geoFence: {
    polygon: {
      points: [
        {
          lat: Number,
          lng: Number,
        },
      ],
      area: {
        type: Number,
      },
      length: {
        type: Number,
      },
    },
    circle: {
      radius: {
        type: Number,
      },
      area: {
        type: Number,
      },
      center: {
        lat: {
          type: Number,
        },
        lng: {
          type: Number,
        },
      },
    },
  },
  centerPoints?: {
    lat: number,
    lng: number
  },
  tenant: MongoId
  geoLocation?: string,
  assetID?: MongoId,
  client: MongoId,
  createdAt: Date,
  updatedAt: Date,
}
