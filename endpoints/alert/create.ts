import { endpoint, request, body, response, defaultResponse, Integer, String, Float } from "@airtasker/spot";
import { FilePath, ApiError, MongoId, BadRequest } from "../../misc";
import { IAlert } from "../../schemas/alert";

/**
 * Create alert for uploaded image
 */
@endpoint({
    method: "POST",
    path: "/alert/create",
    tags: ["ALERT"]
})
class Create {
    @request
    request(@body body: CreateRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: CreateResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface CreateRequest {
    missionId: MongoId,
    flightId: MongoId,
    locationName: String,
    locationId?: MongoId,
    location?: {
        lat: Float,
        long: Float
    },
    note?: String,
    onSite?: boolean,
    image: FilePath,
    pcount: Integer,
    type: String,

}

interface CreateResponse {
    status: true,
    message: "New alert created",
    data: IAlert
}
