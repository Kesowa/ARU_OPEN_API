import { endpoint, request, body, response, defaultResponse, queryParams, Integer } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";

/**
 * Provide one of either parameters
 */
@endpoint({
    method: "GET",
    path: "/get-number-of-alerts-By-location-ID",
    tags: ["ALERT"]
})
class GetNumberByLocationID {
    @request
    request(@queryParams queryParams: GetNumberByLocationIDRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetNumberByLocationIDResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetNumberByLocationIDNotFound) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetNumberByLocationIDRequest {
    locationID: MongoId,
}

interface GetNumberByLocationIDResponse {
    status: true,
    message: "Alert fetched successfully",
    data: Integer,
    location: Location[],
}

interface Location {
    locationName: string,
}

interface GetNumberByLocationIDNotFound {
    status: false,
    message: "Wrong input"
}
