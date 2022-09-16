import { endpoint, request, body, response, defaultResponse, queryParams, String, Integer } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";
import { IAlert } from "../../schemas/alert";

/**
 * Provide one of either parameters
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
    /**
     * Sort using field name in desc or asc order
     * 
     * Format: (FieldName):(desc|asc)
     * 
     * FieldName: createdAt,updatedAt,location,locationName,pcount,fileSize,type
     */
    sortBy: String,
    alertType?: String,
    id: MongoId,
}

interface GetByMissionIDResponse {
    status: true,
    message: "Alert fetched successfully",
    /**
     * Has the missionId, FlightId, and createdBy fields populated with mission, flight, and user models
     */
    data: IAlert[],
    total: Integer,
}

interface GetByMissionIDNotFound {
    status: false,
    message: "No data found",
}