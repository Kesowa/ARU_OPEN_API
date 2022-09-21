import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, Attrs, BadRequest, FilePath, MongoId } from "../../misc";
import { ILayerRasterVector } from "../../schemas/layer";

/**
 * Get base layer
 */
@endpoint({
    method: "PATCH",
    path: "/baselayer/update-base-layer-by-uploaded-layer",
    tags: ["BASE LAYER"]
})
class UpdateByUploadedLayer {
    @request
    request(@body body: UpdateByUploadedLayerRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: UpdateByUploadedLayerResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: UpdateByUploadedLayerNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface UpdateByUploadedLayerRequest {
    filePath: FilePath,
    baseLayer: MongoId,
    attrMapping: {Attr: Attrs}
}

interface UpdateByUploadedLayerResponse {
    status: true,
    message: "Layer has been updated successfully",
    /**
     * Fields raster and vector are populated
     */
    data: ILayerRasterVector
}

interface UpdateByUploadedLayerNotFound {
    status: false,
    message: "file path not exist! " | "baseLayer is null"
}