import { endpoint, request, body, response, defaultResponse, queryParams, Integer, String } from "@airtasker/spot";
import { ApiError, BadRequest, Time } from "../../misc";
import { IAlert } from "../../schemas/alert";

/**
 * Get alerts owned by the tenant of the user account
 */
@endpoint({
    method: "GET",
    path: "/alert/get-alerts-by-tenantid",
    tags: ["ALERT"]
})
class GetByTenantID {
    @request
    request(@queryParams queryParams: GetByTenantIDRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetByTenantIDResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetByTenantIDNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetByTenantIDRequest {
    time?: Time
}

interface GetByTenantIDResponse {
    status: true,
    message: "Total Alerts are ${data.length}",
    data: IAlert[],
    count: Integer
}

interface GetByTenantIDNotFound {
    status: false,
    message: "No Alerts Alerts found"
}