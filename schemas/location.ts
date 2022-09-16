import { MongoId } from "../utils"

export interface ILocation {
    _id: MongoId,
    geometry: {
        type: 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon',
        coordinates: { lat: number, lng: number }
    },
    properties: {
        name: string
    },
    tenantId: MongoId,
}
