import { endpoint, request, body, response, defaultResponse, queryParams, String } from "@airtasker/spot";
import { ApiError, BadRequest } from "../../misc";
import { IAsset } from "../../schemas/asset";

/**
 * Get alerts owned by the tenant of the user account
 */
@endpoint({
    method: "GET",
    path: "/asset/get-all-asset",
    tags: ["ASSET"]
})
class GetAllAssets {
    @request
    request(@queryParams queryParams: GetAllAssetsRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetAllAssetsResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetAllAssetsNotFound) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetAllAssetsRequest {

}

interface GetAllAssetsResponse {
    status: true,
    message: "All assets fetched",
    data: {
        /**
         * Fields userID, tenantID, createdBy, assetOwner, and manufactureID are expanded
         */
        gotDoc: IAsset[]
    }
}

interface GetAllAssetsNotFound {
    status: false,
    message: "Asset doesnt exist"
}