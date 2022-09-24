import { endpoint, request, body, response, defaultResponse, queryParams, Integer } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";
import { IVODFlightMission } from "../../schemas/VOD";
/**
 * Get uploaded videos for mission.
 */
@endpoint({
    method: "GET",
    path: "/vod//get-by-missionID",
    tags: ["VOD"]
})
class GetVODByMissionID {
    @request
    request(@queryParams queryParams: GetVODByMissionIDRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetVODByMissionIDResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetVODByMissionIDNotFound) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetVODByMissionIDRequest {
    page: Integer,
    limit: Integer,
    /** Sort using field name in desc or asc order
     * @oaSchemaProp title
     * "Sort Videos"
     * @oaSchemaProp pattern
     * "^(createdAt|updatedAt|location|locationName|pcount|fileSize|type):(desc|asc)$"
     * @oaSchemaProp example
     * "createdAt:desc"
     *  */
    sortBy: string,
    missionID: MongoId,
}

interface GetVODByMissionIDResponse {
    status: true,
    message: "sucessfully fetched the VODs",
    /**
     * Has the missionId, FlightId, and createdBy fields populated with mission, flight, and user models
     */
    data: IVODFlightMission[],
    TotalPages: Integer,
}

interface GetVODByMissionIDNotFound {
    status: false,
    message: "No Document found",
}