import { endpoint, request, body, response, defaultResponse, Date } from "@airtasker/spot";
import { ApiError, BadRequest} from "../../misc";
import { IAssetClass } from "../../schemas/assetClass";

/**
 * Create asset class
 */
@endpoint({
    method: "POST",
    path: "/assetClass/create",
    tags: ["ASSET CLASS"]
})
class CreateAssetClass {
    @request
    request(@body body: CreateAssetClassRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: CreateAssetClassResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface CreateAssetClassRequest {
    typeName: String,
    createdAt?: Date
}

interface CreateAssetClassResponse {
    status: true,
    message: "Sucessfully created asset class",
    data: IAssetClass
}
