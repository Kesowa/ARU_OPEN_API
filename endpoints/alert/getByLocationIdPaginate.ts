import { endpoint, request, body, response, defaultResponse, queryParams, Integer } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";
import { IUser } from "../../schemas/user";
import { IAlert, IAlertBase } from "../../schemas/alert";
import { IFlight } from "../../schemas/flight";
import { IMission } from "../../schemas/mission";

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
    /** Sort using field name in desc or asc order
     * @oaSchemaProp title
     * "Time Format"
     * @oaSchemaProp pattern
     * "^(createdAt|updatedAt|location|locationName|pcount|fileSize|type):(desc|asc)$"
     * @oaSchemaProp example
     * "createdAt:desc"
     *  */
    sortBy: string,
}

interface GetByLocationIdPaginateResponse {
    status: true,
    message: "Alert fetched successfully",
    total: Integer,
    /**
     * Has the missionId, FlightId, and createdBy fields populated with mission, flight, and user models
     */
    data: GetByLocationIdPaginateData[],
}

interface GetByLocationIdPaginateData extends IAlertBase {
    missionId: IMission,
    createdBy: IUser,
    flightId: IFlight,
    tenantId: MongoId,
}

interface GetByLocationIdPaginateNotFound {
    status: false,
    message: "Wrong input"
}
