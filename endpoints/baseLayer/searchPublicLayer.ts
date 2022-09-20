import { endpoint, request, body, response, defaultResponse, queryParams, Integer } from "@airtasker/spot";
import { Feature } from "../../geojson";
import { ApiError, BadRequest, MongoId } from "../../misc";

/**
 * Get base layer
 */
@endpoint({
    method: "GET",
    path: "/baselayer/searchPublicLayer",
    tags: ["BASE LAYER"]
})
class SearchPublicLayer {
    @request
    request(@queryParams queryParams: SearchPublicLayerRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: SearchPublicLayerResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: SearchPublicLayerNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface SearchPublicLayerRequest {
    mapRef: string,
    value: string,
    key: string,
}

interface SearchPublicLayerResponse {
    status: true,
    message: "Match found",
    data: SearchDataResponse[],
    layerId: MongoId
}

interface SearchDataResponse extends Feature {
    index: Integer
}

interface SearchPublicLayerNotFound {
    status: false,
    message: "No Match found" | "No public layers found" | "Invalid PublicMapRef"
}