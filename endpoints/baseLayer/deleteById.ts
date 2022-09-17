import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";

/**
 * Get base layer
 */
@endpoint({
    method: "DELETE",
    path: "/baselayer/delete-baseLayer-id",
    tags: ["BASE LAYER"]
})
class DeleteBaseByID {
    @request
    request(@body body: DeleteBaseByIDRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: DeleteBaseByIDResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: DeleteBaseByIDNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface DeleteBaseByIDRequest {
    layers: MongoId[]
}

interface DeleteBaseByIDResponse {
    status: true,
    message: "Base successfully deleted"
}

interface DeleteBaseByIDNotFound {
    status: false,
    message: "Base could not be deleted"
}