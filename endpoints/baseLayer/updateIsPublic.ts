import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, BadRequest } from "../../misc";

/**
 * Get base layer
 */
@endpoint({
    method: "PATCH",
    path: "/baselayer/updateisPublic",
    tags: ["BASE LAYER"]
})
class UpdateIsPublicBaseLayer {
    @request
    request(@body body: UpdateIsPublicBaseLayerRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: UpdateIsPublicBaseLayerResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: UpdateIsPublicBaseLayerNotFound) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface UpdateIsPublicBaseLayerRequest { }

interface UpdateIsPublicBaseLayerResponse {
    status: true,
    message: "All layer documents modified",
}

interface UpdateIsPublicBaseLayerNotFound {
    status: false,
    message: "No layer documents found"
}