import { endpoint, request, body, response, defaultResponse, queryParams, Integer } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";
import { IAlertMissionCreatedFlight } from "../../schemas/alert";
/**
 * Get outcome images created by drone and user
 */
@endpoint({
    method: "GET",
    path: "/alert/get-alerts-By-mission-ID",
    tags: ["ALERT"]
})
class GetByMissionID {
    @request
    request(@queryParams queryParams: GetByMissionIDRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetByMissionIDResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetByMissionIDNotFound) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetByMissionIDRequest {
    page: Integer,
    limit: Integer,
    /** Sort using field name in desc or asc order
     * @oaSchemaProp title
     * "Sort Alerts"
     * @oaSchemaProp pattern
     * "^(createdAt|updatedAt|location|locationName|pcount|fileSize|type):(desc|asc)$"
     * @oaSchemaProp example
     * "createdAt:desc"
     *  */
    sortBy: string,
    alertType?: string,
    id: MongoId,
}

interface GetByMissionIDResponse {
    status: true,
    message: "Alert fetched successfully",
    /**
     * Has the missionId, FlightId, and createdBy fields populated with mission, flight, and user models
     */
    data: IAlertMissionCreatedFlight[],
    total: Integer,
}

interface GetByMissionIDNotFound {
    status: false,
    message: "No data found",
}