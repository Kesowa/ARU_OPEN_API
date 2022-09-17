import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";

/**
 * Please don't use this endpoint at all
 */
@endpoint({
    method: "PATCH",
    path: "/baselayer/updateisBase",
    tags: ["BASE LAYER"]
})
class UpdateIsBaseLayer {
    @request
    request(@body body: UpdateIsBaseLayerRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: UpdateIsBaseLayerResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: UpdateIsBaseLayerNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface UpdateIsBaseLayerRequest {
    assetID: MongoId
}

interface UpdateIsBaseLayerResponse {
    status: true,
    message: "All layer documents modified",
}

interface UpdateIsBaseLayerNotFound {
    status: false,
    message: "No layer documents found"
}