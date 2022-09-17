import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { BadRequest, MongoId } from "../../misc";
import { ILayer } from "../../schemas/layer";

/**
 * Get base layer
 */
@endpoint({
    method: "PATCH",
    path: "/baselayer/updateRasterLayerImport",
    tags: ["BASE LAYER"]
})
class UpdateRasterLayerImport {
    @request
    request(@body body: UpdateRasterLayerImportRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: UpdateRasterLayerImportResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 403 })
    Forbidden(@body body: {
        status: false,
        message: "Incompatible layer types"
    }) { }

    @response({ status: 404 })
    NotFound(@body body: UpdateRasterLayerImportNotFound) { }

    @defaultResponse
    defaultResponse(@body body: {
        status: false,
        message: "Oops something went wrong"
    }) { }
}

interface UpdateRasterLayerImportRequest {
    layerId: MongoId,
    layers: MongoId[]
}

interface UpdateRasterLayerImportResponse {
    status: true,
    message: "Raster layer updated sucessfully",
    data: ILayer
}

interface UpdateRasterLayerImportNotFound {
    status: false,
    message: "Layer not found"
}