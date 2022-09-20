import { endpoint, request, body, response, defaultResponse, Date } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";
import { ILayer } from "../../schemas/layer";

/**
 * Get base layer
 */
@endpoint({
    method: "POST",
    path: "/baselayer/create-base-raster-import-mission",
    tags: ["BASE LAYER"]
})
class CreateRasterImportMission {
    @request
    request(@body body: CreateRasterImportMissionRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: CreateRasterImportMissionResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: CreateRasterImportMissionNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface CreateRasterImportMissionRequest {
    name: string,
    layers: MongoId[],
    captureDate: Date,
}

interface CreateRasterImportMissionResponse {
    status: true,
    message: "New Base Layer Created Successfully" | "Incompatible layer types",
    data: ILayer
}

interface CreateRasterImportMissionNotFound {
    status: false,
    message: "Asset doesnt exist"
}