import { endpoint, request, body, response, defaultResponse, queryParams } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";
import { IAlert } from "../../schemas/alert";


@endpoint({
    method: "GET",
    path: "/alert/get-alert-by-ID",
    tags: ["ALERT"]
})
class GetByID {
    @request
    request(@queryParams queryParams: GetByIDRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetByIDResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetByIdNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetByIDRequest {
    id: MongoId
}

interface GetByIDResponse {
    status: true,
    message: "Alert fetched successfully",
    data: IAlert[]
}

interface GetByIdNotFound {
    status: false,
    message: "Alert Not Found"
}