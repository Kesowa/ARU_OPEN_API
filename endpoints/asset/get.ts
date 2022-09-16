import { endpoint, request, body, response, defaultResponse, queryParams } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";
import { IAsset } from "../../schemas/asset";

/**
 * Get asset
 */
@endpoint({
    method: "GET",
    path: "/asset/get",
    tags: ["ASSET"]
})
class GetAsset {
    @request
    request(@queryParams queryParams: GetAssetRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetAssetResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetAssetNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetAssetRequest {
    assetID: MongoId
}

interface GetAssetResponse {
    status: true,
    message: "Asset fetched",
    data: {
        /**
         * Fields userID, tenantID, createdBy, assetOwner, and manufactureID are expanded
         */
        gotDoc: IAsset
    }
}

interface GetAssetNotFound {
    status: false,
    message: "Asset doesnt exist"
}