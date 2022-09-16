import { endpoint, request, body, response, defaultResponse, queryParams, Integer, String } from "@airtasker/spot";
import { ApiError, BadRequest } from "../../misc";
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
    /**
     * Format: Value TimeUnit
     * 
     * TimeUnit: day(s), week(s), year(s)
     * 
     * Example: 10 days
     */
    time?: String
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