import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";
import { ILayerTenantVector } from "./getAllPublic";

/**
 * Get base layer
 */
@endpoint({
    method: "PATCH",
    path: "/baselayer/publishBaseLayer",
    tags: ["BASE LAYER"]
})
class PublishBaseLayer {
    @request
    request(@body body: PublishBaseLayerRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: PublishBaseLayerResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: PublishBaseLayerNotFound) {}

    @response({ status: 500})
    ServerError(@body body: {
        status: false,
        message: "Could not make base layer public"
    }){}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface PublishBaseLayerRequest {
    layerId: MongoId[]
}

interface PublishBaseLayerResponse {
    status: true,
    message: "Layer: ${req.body.layerId} has been made public",
    publicMapRed: string,
    /**
     * Fields tenantId, vector are populated
     */
    data: ILayerTenantVector
}

interface PublishBaseLayerNotFound {
    status: false,
    message: "Oops no base layers found"
}