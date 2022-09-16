import { endpoint, request, body, response, defaultResponse, queryParams, String, Integer } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";
import { IAlert } from "../../schemas/alert";

/**
 * Provide one of either parameters
 */
@endpoint({
    method: "GET",
    path: "/get-alerts-By-location-id-pagination",
    tags: ["ALERT"]
})
class GetByLocationIdPaginate {
    @request
    request(@queryParams queryParams: GetByLocationIdPaginateRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetByLocationIdPaginateResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetByLocationIdPaginateNotFound) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetByLocationIdPaginateRequest {
    page: Integer,
    limit: Integer,
    /** Location ID */
    id: MongoId,
    /**
     * Sort using field name in desc or asc order
     * 
     * Format: (FieldName):(desc|asc)
     * 
     * FieldName: createdAt,updatedAt,location,locationName,pcount,fileSize,type
     */
     sortBy: String,
}

interface GetByLocationIdPaginateResponse {
    status: true,
    message: "Alert fetched successfully",
    total: Integer,
    /**
     * Has the missionId, FlightId, and createdBy fields populated with mission, flight, and user models
     */
    data: IAlert[],
}


interface GetByLocationIdPaginateNotFound {
    status: false,
    message: "Wrong input"
}
