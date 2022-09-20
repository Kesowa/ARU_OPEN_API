import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, Attrs, BadRequest, Color, MongoId, SizeExceeded } from "../../misc";
import { ILayer } from "../../schemas/layer";

/**
 * Get base layer
 */
@endpoint({
    method: "POST",
    path: "/baselayer/create-by-layers",
    tags: ["BASE LAYER"]
})
class CreateByLayers {
    @request
    request(@body body: CreateByLayersRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: CreateByLayersResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 500 })
    NotFound(@body body: {
        status: false,
        message: "Failed to create vector layer"
    }) {}

    @response({ status: 403 })
    SizeError(@body body: SizeExceeded) { }
    
    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface CreateByLayersRequest {
    name: string,
    pattr: Attrs[],
    layers: MongoId[],
    vectorTypeId: MongoId,
    color: Color,
}

interface CreateByLayersResponse {
    status: true,
    message: "Sucessfully created base layer",
    data: ILayer
}
