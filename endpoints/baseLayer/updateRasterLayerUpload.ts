import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { BadRequest, File, MongoId } from "../../misc";
import { ILayer } from "../../schemas/layer";

/**
 * Must be multipart/form-data
 */
@endpoint({
    method: "PATCH",
    path: "/baselayer/updateRasterLayerUpload/Raster",
    tags: ["BASE LAYER"]
})
class UpdateRasterLayerUpload {
    @request
    request(@body body: UpdateRasterLayerUploadRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: UpdateRasterLayerUploadResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: UpdateRasterLayerUploadNotFound) { }

    @defaultResponse
    defaultResponse(@body body: {
        status: false,
        message: "Oops something went wrong"
    }) { }
}

interface UpdateRasterLayerUploadRequest {
    file: File,
    layerId: MongoId,
}

interface UpdateRasterLayerUploadResponse {
    status: true,
    message: "Raster layer updated sucessfully",
    data: ILayer
}

interface UpdateRasterLayerUploadNotFound {
    status: false,
    message: "Layer not found"
}