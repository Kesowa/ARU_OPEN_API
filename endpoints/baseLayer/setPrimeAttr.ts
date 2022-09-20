import { endpoint, request, body, response, defaultResponse, queryParams } from "@airtasker/spot";
import { ApiError, Attrs, BadRequest, FilePath, MongoId } from "../../misc";
import { ILayer, ILayerBase } from "../../schemas/layer";
import { IVector } from "../../schemas/vectorprops";

/**
 * Get base layer
 */
@endpoint({
    method: "PUT",
    path: "/baselayer/set-prime-attr",
    tags: ["BASE LAYER"]
})
class SetPrimeAttr {
    @request
    request(@body body: SetPrimeAttrRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: SetPrimeAttrResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: SetPrimeAttrNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface SetPrimeAttrRequest {
    path: FilePath,
    pattr: Attrs[],
    id: MongoId,
}

interface SetPrimeAttrResponse {
    status: true,
    message: "Prime attributes added successfully",
    /**
     * Vector is populated
     */
    data: ILayerVector
}

export interface ILayerVector extends ILayerBase {
    raster: MongoId,
    vector: IVector,
    missionId: MongoId,
    tenantId: MongoId,
    createdBy: MongoId,
    updatedBy: MongoId,
    layerGroupId: MongoId,
}

interface SetPrimeAttrNotFound {
    status: false,
    message: "file path not exist! "
}