import { endpoint, request, body, response, defaultResponse, queryParams } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";
import { IAsset } from "../../schemas/asset";

/**
 * Get asset class by ID
 */
@endpoint({
    method: "GET",
    path: "/assetClass/get-asset-class-by-id",
    tags: ["ASSET CLASS"]
})
class GetByIdAssetClass {
    @request
    request(@queryParams queryParams: GetByIdAssetClassRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetByIdAssetClassResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetByIdAssetClassNotFound) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetByIdAssetClassRequest {
    _id: MongoId
}

interface GetByIdAssetClassResponse {
    status: true,
    message: "Asset fetched sucessfully.",
    data: IAsset,
}

interface GetByIdAssetClassNotFound {
    status: false,
    message: "Could not fetch"
}