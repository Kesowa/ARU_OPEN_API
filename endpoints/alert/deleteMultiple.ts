import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";

/**
 * Provide one of either parameters
 */
@endpoint({
    method: "DELETE",
    path: "/alert/delete-multiple-alerts",
    tags: ["ALERT"]
})
class DeleteMultipleAlert {
    @request
    request(@body body: DeleteMultipleAlertRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: DeleteMultipleAlertResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: DeleteMultipleAlertNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface DeleteMultipleAlertRequest {
    /** Alert IDs to be deleted
     * @oaSchemaProp minItems
     * 1
     * @oaSchemaProp uniqueItems
     * true
     *  */
    id: MongoId[]
}

interface DeleteMultipleAlertResponse {
    status: true,
    message: "Alerts deleted successfully!"
}

interface DeleteMultipleAlertNotFound {
    status: false,
    message: "Failed to delete alerts"
}