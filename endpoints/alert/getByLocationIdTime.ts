import { endpoint, request, body, response, defaultResponse, queryParams } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest, Time } from "../../misc";
import { IAlert } from "../../schemas/alert";

/**
 * Provide one of either parameters
 */
@endpoint({
    method: "GET",
    path: "/alert/get-alert-by-location-ID-and-time",
    tags: ["ALERT"]
})
class GetByLocationAndTime {
    @request
    request(@queryParams queryParams: GetByLocationAndTimeRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetByLocationAndTimeResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetByLocationAndTimeNotFound) { }

    @response({ status: 500 })
    InvalidTime(@body body: GetByLocationAndTimeInvalid) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetByLocationAndTimeRequest {
    locationID: MongoId,
    time: Time
}

interface GetByLocationAndTimeResponse {
    status: true,
    message: "Total Alerts for ${req.query.locationID} is ${data.length}",
    data: IAlert[]
}

interface GetByLocationAndTimeNotFound {
    status: false,
    message: "No Alerts Alerts for ${req.query.locationID} in this time span"
}

interface GetByLocationAndTimeInvalid {
    status: false,
    message: "Internal server error",
    error: "Invalid time ${req.query.time}"
}