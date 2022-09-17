import { Float } from "@airtasker/spot";

/**
 * A MongoDB ID
 */
export type MongoId = string;

/**
 * Path to a file, relative to the static server URL
 */
export type FilePath = string;

/**
 * Blob-like file data
 */
export type File = string;

/**
 * Server ran into an exception
 * 
 * Status code will be 500
 */
export interface ApiError {
    status: false,
    message: "Server error"
};

/**
 * Request body was invalid
 * 
 * Check data for more info
 */
export interface BadRequest {
    status: false,
    message: "request validation failed",
    data: ErrorMap
}


/**
 * Tenant storage exhausted
 * 
 * File upload operation blocked
 */
export interface SizeExceeded {
    status: false,
    message: "Actual storage exceeded the Limit of Set storage"
}

/**
 * Map of field name to errors
 */
interface ErrorMap {
    error: string
}

export type Attrs = "SL_NO" | "AA" | "Solar_ID" | "Placed_IN" | "Latitude" | "Longitude" | "DoC" | "Phase" | "color" | "icon" | "sys_id";

/**
 * Hex color string
 * 
 * Example: #00ff00
 * 
 * @default
 * "#000000"
 */
export type Color = string;

/**
 * Format: Value TimeUnit
 * 
 * TimeUnit: day(s), week(s), year(s)
 * 
 * Example: 10 days
 */
export type Time = string;

export interface GeoJson {
    type: string,
    name: string,
    crs: {
        type: string,
        properties: {
            name: string
        }
    },
    features: Feature[],
    errno: number
};

export interface Feature {
    type: "Feature",
    properties: Properties & { Nth: Properties },
    geometry: Point
};

export interface Properties {
    SL_NO: number,
    AA: string,
    Solar_ID: string,
    Placed_IN: string,
    Latitude: number,
    Longitude: number,
    DoC: string,
    Phase: string,
    color: string,
    icon: string,
    sys_id: string,
}

interface Point {
    type: "Point",
    coordinates: Float[]
};
