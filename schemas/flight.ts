import { DateTime, Float } from "@airtasker/spot"
import { MongoId } from "../misc"

export interface IFlightBase {
  _id: MongoId,
  name: string,
  description: string
  date: string,
  time: string,
  duration: string,
  geoFence: {
    polygon: {
      points:
      {
        lat: Float,
        lng: Float,
      }[],
      area: {
        type: Float,
      },
      length: {
        type: Float,
      },
    },
    circle: {
      radius: {
        type: Float,
      },
      area: {
        type: Float,
      },
      center: {
        lat: {
          type: Float,
        },
        lng: {
          type: Float,
        },
      },
    },
  },
  centerPoints?: {
    lat: Float,
    lng: Float
  },
  geoLocation?: string,
  createdAt: DateTime,
  updatedAt: DateTime,
}

export interface IFlightLink {
  assetID?: MongoId,
  client: MongoId,
  tenant: MongoId,
  locationID: MongoId,
  pilotID: MongoId,
  mission: MongoId,
}

export interface IFlight extends IFlightBase, IFlightLink { }