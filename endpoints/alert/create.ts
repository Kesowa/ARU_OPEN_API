import { endpoint, request, body, response, defaultResponse, Integer, Float } from "@airtasker/spot";
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
class CreateAlert {
    @request
    request(@body body: CreateAlertRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: CreateAlertResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface CreateAlertRequest {
    missionId: MongoId,
    flightId: MongoId,
    locationName: string,
    locationId?: MongoId,
    location?: {
        lat: Float,
        long: Float
    },
    note?: string,
    onSite?: boolean,
    image: FilePath,
    pcount: Integer,
    type: string,

}

interface CreateAlertResponse {
    status: true,
    message: "New alert created",
    data: IAlert
}
