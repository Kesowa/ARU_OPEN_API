import { endpoint, request, body, response, defaultResponse, Integer, String } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest, File, SizeExceeded } from "../../misc";
import { IAlert } from "../../schemas/alert";

/**
 * Upload alert image and data in one go
 * 
 * Use multipart/form-data instead of json
 */
@endpoint({
    method: "POST",
    path: "/alert/manual-upload-alert",
    tags: ["ALERT"]
})
class ManualUploadAlert {
    @request
    request(@body body: ManualRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: ManualResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 403 })
    SizeError(@body body: SizeExceeded) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface ManualRequest {
    image: File,
    missionId: MongoId,
    flightId: MongoId,
    locationName: String,
    locationId?: MongoId,
    // location?: {
    //     lat: Float,
    //     long: Float
    // },
    note?: String,
    onSite?: boolean,
    pcount: Integer,
    type: String,

}

interface ManualResponse {
    status: true,
    message: "New alert created",
    data: IAlert
}
