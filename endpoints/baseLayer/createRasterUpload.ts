import { endpoint, request, body, response, defaultResponse, Date } from "@airtasker/spot";
import { ApiError, BadRequest, File, MongoId } from "../../misc";
import { ILayer } from "../../schemas/layer";

/**
 * Body is multipart/form-data
 */
@endpoint({
    method: "POST",
    path: "/baselayer/create-base-raster-upload/Raster",
    tags: ["BASE LAYER"]
})
class CreateBaseRasterUpload {
    @request
    request(@body body: CreateBaseRasterUploadRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: CreateBaseRasterUploadResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 500 })
    FailedError(@body body: CreateBaseRasterUploadFailed) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface CreateBaseRasterUploadRequest {
    file: File,
    name: string,
    type: string,
    raster: MongoId,
    captureDate: Date
}

interface CreateBaseRasterUploadResponse {
    status: true,
    message: "New Base Layer Created Successfully",
    data: ILayer
}

interface CreateBaseRasterUploadFailed {
    status: false,
    message: "Failed to create base layer"
}