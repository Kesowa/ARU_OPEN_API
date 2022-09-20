import { endpoint, request, body, response, defaultResponse, queryParams, Integer } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";
import { IAlertBase } from "../../schemas/alert";
import { IFlight } from "../../schemas/flight";
import { IMission } from "../../schemas/mission";
import { IUser } from "../../schemas/user";

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
    data: GetByMissionIDData[],
    total: Integer,
}

interface GetByMissionIDData extends IAlertBase {
    missionId: IMission,
    createdBy: IUser,
    flightId: IFlight,
    tenantId: MongoId,
}

interface GetByMissionIDNotFound {
    status: false,
    message: "No data found",
}