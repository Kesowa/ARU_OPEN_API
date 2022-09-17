import { endpoint, request, body, response, defaultResponse, String } from "@airtasker/spot";
import { ApiError, BadRequest, GeoJson, MongoId, SizeExceeded } from "../../misc";
import { ILayer } from "../../schemas/layer";

/**
 * Get base layer
 */
@endpoint({
    method: "POST",
    path: "/baselayer/create-base-vector-layer",
    tags: ["BASE LAYER"]
})
class CreateBaseVectorLayer {
    @request
    request(@body body: CreateBaseVectorLayerRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: CreateBaseVectorLayerResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 403 })
    SizeError(@body body: SizeExceeded) { }

    @response({ status: 500 })
    ServerError(@body body: {
        status: false,
        message: "Color selection error" | "Failed to create base vector layer"
    }) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface CreateBaseVectorLayerRequest {
    name: String,
    vectorId: MongoId,
    geoJSON: GeoJson
}

interface CreateBaseVectorLayerResponse {
    status: true,
    message: "Sucessfully created base vector layer",
    data: ILayer
}