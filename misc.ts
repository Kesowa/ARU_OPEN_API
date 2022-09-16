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