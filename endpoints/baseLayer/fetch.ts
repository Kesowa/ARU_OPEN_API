import { endpoint, request, body, response, defaultResponse, pathParams } from "@airtasker/spot";
import { ApiError, BadRequest } from "../../misc";
import { ILayerRasterVector } from "../../schemas/layer";

/**
 * Get base layer
 */
@endpoint({
    method: "GET",
    path: "/fetch/:type",
    tags: ["BASE LAYER"]
})
class FetchBaseLayer {
    @request
    request(@pathParams pathParams: FetchBaseLayerRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: FetchBaseLayerResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: FetchBaseLayerNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface FetchBaseLayerRequest {
    type: "Vector" | "Raster" | "All"
}

interface FetchBaseLayerResponse {
    status: true,
    message: "Asset fetched",
    /**
     * Fields vector and raster populated
     */
    data: ILayerRasterVector[]
}



interface FetchBaseLayerNotFound {
    status: false,
    message: "Please provide a valid size"
}