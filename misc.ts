import { DateTime } from "@airtasker/spot";

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

/** Format of time parameter
 * @oaSchemaProp title
 * "Time Format"
 * @oaSchemaProp pattern
 * "^[0-9]+ (day|week|year)s?$"
 * @oaSchemaProp example
 * "7 days"
 *  */
export type Time = string;
