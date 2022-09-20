import { DateTime } from "@airtasker/spot"
import { MongoId } from "../misc"

export interface IRasterBase {
    _id: MongoId,
    name: 'ORTHO' | 'DEM' | 'NDVI' | 'DTM' | 'NDWI',
    bidx?: string,
    bandExp?: string
    colorMap?: string
    resamplingMethod?: string
    createdAt: DateTime,
    updatedAt: DateTime,

};

export interface IRasterLink {
    createdBy: MongoId,
    updatedBy: MongoId,
}

export interface IRaster extends IRasterBase, IRasterLink {}