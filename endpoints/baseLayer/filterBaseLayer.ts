import { endpoint, request, body, response, defaultResponse, String } from "@airtasker/spot";
import { ApiError, BadRequest, Time } from "../../misc";
import { ILayer } from "../../schemas/layer";

/**
 * Get base layer
 */
@endpoint({
    method: "POST",
    path: "/baselayer/filter-base-layer",
    tags: ["BASE LAYER"]
})
class FilterBaseLayer {
    @request
    request(@body body: FilterBaseLayerRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: FilterBaseLayerResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: FilterBaseLayerNotFound) {}

    @response({ status: 500 })
    DataMismatch(@body body: {
        status: false,
        message: " data not match!"
    }) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

type SortOrder = "desc" | "asc";
interface FilterBaseLayerRequest {
    createdAt?: SortOrder,
    name?: SortOrder,
    captureDate?: SortOrder,
    time: Time,
    rasterProps?: String[],
    vectorProps?: String[],
    vectorPropsType?: String[],
}

interface FilterBaseLayerResponse {
    status: true,
    message: "Sucessfully get Vector or Raster data ",
    /**
     * Fields raster and vector are populated
     */
    data: ILayer
}

interface FilterBaseLayerNotFound {
    status: false,
    message: "Data doesn't exist!"
}