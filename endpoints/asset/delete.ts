import { endpoint, request, body, response, defaultResponse, queryParams, Integer, String } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";
import { IAsset } from "../../schemas/asset";

/**
 * Get alerts owned by the tenant of the user account
 */
@endpoint({
    method: "DELETE",
    path: "/asset/delete",
    tags: ["ASSET"]
})
class DeleteAsset {
    @request
    request(@body body: DeleteAssetRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: DeleteAssetResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: DeleteAssetNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface DeleteAssetRequest {
    assetID: MongoId
}

interface DeleteAssetResponse {
    status: true,
    message: "Asset deleted",
    data: IAsset,
}

interface DeleteAssetNotFound {
    status: false,
    message: "Asset doesnt exist"
}