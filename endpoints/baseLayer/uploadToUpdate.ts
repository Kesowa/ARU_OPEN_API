import { endpoint, request, body, response, defaultResponse, queryParams } from "@airtasker/spot";
import { ApiError, Attrs, BadRequest, File, FilePath, MongoId } from "../../misc";

/**
 * This must be multipart/form-data
 */
@endpoint({
    method: "POST",
    path: "/baselayer/upload-to-update-base-layer",
    tags: ["BASE LAYER"]
})
class UploadToUpdateBaseLayer {
    @request
    request(@body body: UploadToUpdateBaseLayerRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: UploadToUpdateBaseLayerResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 403 })
    Forbidden(@body body: {
        status: false,
        message: "The file must be of same type as base layer"
    }) { }

    @response({ status: 404 })
    NotFound(@body body: UploadToUpdateBaseLayerNotFound) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface UploadToUpdateBaseLayerRequest {
    file: File,
    baseLayer: MongoId
}

interface UploadToUpdateBaseLayerResponse {
    status: true,
    data: {
        primeAttributes: Attrs,
        layerAttributes: Attrs,
        filePath: FilePath,
        baseLayer: MongoId
    }
}

interface UploadToUpdateBaseLayerNotFound {
    status: false,
    message: "file path not exist! "
}