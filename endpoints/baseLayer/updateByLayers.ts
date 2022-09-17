import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";
import { ILayer } from "../../schemas/layer";

/**
 * Get base layer
 */
@endpoint({
    method: "PATCH",
    path: "/baselayer/update-by-layers",
    tags: ["BASE LAYER"]
})
class UpdateByLayers {
    @request
    request(@body body: UpdateByLayersRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: UpdateByLayersResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: UpdateByLayersNotFound) {}

    @response({ status: 403 })
    LayerMismatch(@body body: {
        status: false,
        message: "Layer type must be same as base layer"
    }) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface UpdateByLayersRequest {
    layers: MongoId[],
    baseLayer: MongoId
}

interface UpdateByLayersResponse {
    status: true,
    message: "Layer updated successfully",
    /**
     * Field vector has been populated
     */
    data: ILayer
}

interface UpdateByLayersNotFound {
    status: false,
    message: "baseLayer is null or undefined" | "file path not exist! "
}