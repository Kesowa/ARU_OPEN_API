import { endpoint, request, body, response, defaultResponse, queryParams } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";
import { IAlert } from "../../schemas/alert";

/**
 * Provide one of either parameters
 */
@endpoint({
    method: "GET",
    path: "/alert/get-alerts-by-flight-or-location-ID",
    tags: ["ALERT"]
})
class GetByFlightOrLocationID {
    @request
    request(@queryParams queryParams: GetFlightLocationRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetFlightLocationResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetFlightLocationNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetFlightLocationRequest {
    flightID?: MongoId,
    locationID?: MongoId  
}

interface GetFlightLocationResponse {
    status: true,
    message: "Alerts fetched successfully",
    data: IAlert[]
}

interface GetFlightLocationNotFound {
    status: false,
    message: "Wrong Input"
}