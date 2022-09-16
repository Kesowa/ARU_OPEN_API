import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";
import { AssetInfo, IAsset } from "../../schemas/asset";

/**
 * Update asset properties
 */
@endpoint({
    method: "PATCH",
    path: "/asset/update",
    tags: ["ASSET"]
})
class UpdateAsset {
    @request
    request(@body body: UpdateAssetRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: UpdateAssetResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 500 })
    Error(@body body: UpdateAssetError) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface UpdateAssetRequest {
    userID: MongoId,
    tenantID: MongoId,
    assetID: MongoId,
    assetInfo: AssetInfo[],
}

interface UpdateAssetResponse {
    status: true,
    message: "Successfully updated Asset",
    /**
     * Fields userID, createdBy, and assetOwner are expanded
     */
    data: IAsset,
}

interface UpdateAssetError {
    status: false,
    message: "Asset could not be updated"
}