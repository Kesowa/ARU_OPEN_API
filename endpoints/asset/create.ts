import { endpoint, request, body, response, defaultResponse, String, Date } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";
import { AssetInfo, IAsset } from "../../schemas/asset";

/**
 * Create asset
 */
@endpoint({
    method: "POST",
    path: "/asset/create",
    tags: ["ASSET"]
})
class CreateAsset {
    @request
    request(@body body: CreateAssetRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: CreateAssetResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface CreateAssetRequest {
    assetName: String,
    userID: MongoId,
    assetInfo: AssetInfo[],
    userid: MongoId,
    model: MongoId,
    assetOwner: MongoId,
    manufactureDate: Date,
    manufactureID: MongoId,
}

interface CreateAssetResponse {
    status: true,
    message: "Successfully saved the asset",
    data: IAsset,
}
