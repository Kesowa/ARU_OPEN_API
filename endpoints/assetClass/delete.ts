import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";

/**
 * Delete asset class with ID
 */
@endpoint({
    method: "DELETE",
    path: "/assetClass/delete",
    tags: ["ASSET CLASS"]
})
class CreateAssetClass {
    @request
    request(@body body: CreateAssetClassRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: CreateAssetClassResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: CreateAssetClassNotFound) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface CreateAssetClassRequest {
    id: MongoId
}

interface CreateAssetClassResponse {
    status: true,
    message: "Doc successfully deleted",
}

interface CreateAssetClassNotFound {
    status: false,
    message: "Asset class doesnt exist"
}