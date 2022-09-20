import { endpoint, request, body, response, defaultResponse, queryParams } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";
import { ILayer, ILayerBase } from "../../schemas/layer";
import { ITenant } from "../../schemas/tenant";
import { IVector } from "../../schemas/vectorprops";

/**
 * Get base layer
 */
@endpoint({
    method: "GET",
    path: "/baselayer/getallpublicbaselayers",
    tags: ["BASE LAYER"]
})
class GetAllPublicBaseLayers {
    @request
    request(@queryParams queryParams: GetAllPublicBaseLayersRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetAllPublicBaseLayersResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetAllPublicBaseLayersNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetAllPublicBaseLayersRequest {
    mapRef: string
}

interface GetAllPublicBaseLayersResponse {
    status: true,
    message: "Fetched all public base layers",
    /**
     * Fields tenantId, vector are populated
     */
    data: ILayerTenantVector[]
}

export interface ILayerTenantVector extends ILayerBase {
    raster: MongoId,
    vector: IVector,
    missionId: MongoId,
    tenantId: ITenant,
    createdBy: MongoId,
    updatedBy: MongoId,
    layerGroupId: MongoId,
}

interface GetAllPublicBaseLayersNotFound {
    status: false,
    message: "Oops! No map data found." | "Please provide a map ref in order to fetch public layers"
}