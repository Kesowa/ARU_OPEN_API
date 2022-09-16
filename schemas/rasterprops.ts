import { MongoId } from "../utils"

export interface IRaster {
    _id: MongoId,
    name: 'ORTHO' | 'DEM' | 'NDVI' | 'DTM' | 'NDWI',
    bidx?: string,
    bandExp?: string
    colorMap?: string
    resamplingMethod?: string
    createdBy: MongoId,
    updatedBy: MongoId,
    createdAt: Date,
    updatedAt: Date,

};
