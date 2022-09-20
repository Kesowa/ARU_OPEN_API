import { MongoId } from "../misc"

export interface ILocationBase {
    _id: MongoId,
    geometry: {
        type: 'Point' | 'MultiPoint' | 'Linestring' | 'MultiLinestring' | 'Polygon' | 'MultiPolygon',
        coordinates: { lat: number, lng: number }
    },
    properties: {
        name: string
    },
}

export interface ILocationLink {
    tenantId: MongoId,
}

export interface ILocation extends ILocationBase, ILocationLink {}