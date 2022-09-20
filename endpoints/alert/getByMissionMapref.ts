import { endpoint, request, body, response, defaultResponse, queryParams, Integer } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";
import { IAlert } from "../../schemas/alert";

/**
 * Provide one of either parameters
 */
@endpoint({
    method: "GET",
    path: "/get-alerts-by-mission-mapref",
    tags: ["ALERT"]
})
class GetMyMissionMapref {
    @request
    request(@queryParams queryParams: GetMyMissionMaprefRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetMyMissionMaprefResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetMyMissionMaprefNotFound) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetMyMissionMaprefRequest {
    id: MongoId,
}

interface GetMyMissionMaprefResponse {
    status: true,
    message: " mission data fetched successfully!",
    /**
     * missionId is expanded to Mission model
     */
    data: IAlert[],
}

interface GetMyMissionMaprefNotFound {
    status: false,
    message: "No Results found",
}