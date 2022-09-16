import { endpoint, request, body, response, defaultResponse, queryParams, Integer, String } from "@airtasker/spot";
import { ApiError, BadRequest } from "../../misc";
import { IAlert } from "../../schemas/alert";

/**
 * Get alerts owned by the tenant of the user account
 */
@endpoint({
    method: "GET",
    path: "/get-alerts-by-tenantid-advanced-result",
    tags: ["ALERT"]
})
class GetByTenantIdAdvanced {
    @request
    request(@queryParams queryParams: GetByTenantIdAdvancedRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetByTenantIdAdvancedResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetByTenantIdAdvancedNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetByTenantIdAdvancedRequest {
    /**
     * Format: Value TimeUnit
     * 
     * TimeUnit: day(s), week(s), year(s)
     * 
     * Example: 10 days
     */
    time?: String,
    /**
     * Example: 2022-10-30 2022-11-21
     */
    timeRange?: String,
    user?: String,
    page: Integer,
    limit: Integer,
}

interface GetByTenantIdAdvancedResponse {
    status: true,
    message: "Total Alerts are ${data.length}",
    data: IAlert[],
    count: Integer
}

interface GetByTenantIdAdvancedNotFound {
    status: false,
    message: "No Alerts Alerts found"
}