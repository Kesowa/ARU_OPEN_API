import { endpoint, request, body, response, defaultResponse, queryParams, Integer } from "@airtasker/spot";
import { ApiError, BadRequest, Time } from "../../misc";
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
    time?: Time,
    /**
     * Example: 2022-10-30 2022-11-21
     */
    timeRange?: string,
    user?: string,
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