import { endpoint, request, body, response, defaultResponse, queryParams } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";
import { IAlert } from "../../schemas/alert";

@endpoint({
    method: "GET",
    path: "/alert/get-alert-by-location-ID",
    tags: ["ALERT"]
})
class GetByLocationID {
    @request
    request(@queryParams queryParams: GetByLocationIDRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetByLocationIDResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetByLocationIDNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetByLocationIDRequest {
    id: MongoId
}

interface GetByLocationIDResponse {
    status: true,
    message: "Alert fetched successfully",
    data: IAlert[]
}

interface GetByLocationIDNotFound {
    status: false,
    message: "Wrong input"
}