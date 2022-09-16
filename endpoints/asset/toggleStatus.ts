import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, BadRequest } from "../../misc";
import { IAsset } from "../../schemas/asset";

/**
 * Get alerts owned by the tenant of the user account
 */
@endpoint({
    method: "PATCH",
    path: "/asset/toggle-asset-status",
    tags: ["ASSET"]
})
class ToggleStatusAsset {
    @request
    request(@body body: ToggleStatusAssetRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: ToggleStatusAssetResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: ToggleStatusAssetNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface ToggleStatusAssetRequest {
    isActive: boolean,
}

interface ToggleStatusAssetResponse {
    status: true,
    message: "Sucessfully toggled the asset to ${toggledAsset.isActive}",
    data: IAsset,
}

interface ToggleStatusAssetNotFound {
    status: false,
    message: "Asset couldn't be toggled"
}