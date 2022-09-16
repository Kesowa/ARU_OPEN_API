import { endpoint, request, body, response, defaultResponse, queryParams } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";
import { IAlert } from "../../schemas/alert";

/**
 * Provide one of either parameters
 */
@endpoint({
    method: "DELETE",
    path: "/alert/delete-multiple-alerts",
    tags: ["ALERT"]
})
class DeleteMultiple {
    @request
    request(@body body: DeleteMultipleRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: DeleteMultipleResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: DeleteMultipleNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface DeleteMultipleRequest {
    id: MongoId[]
}

interface DeleteMultipleResponse {
    status: true,
    message: "Alerts deleted successfully!"
}

interface DeleteMultipleNotFound {
    status: false,
    message: "Failed to delete alerts"
}