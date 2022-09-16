import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";
import { IAssetClass } from "../../schemas/assetClass";

/**
 * Update asset class
 */
@endpoint({
    method: "PATCH",
    path: "/assetClass/update",
    tags: ["ASSET CLASS"]
})
class UpdateAssetClass {
    @request
    request(@body body: UpdateAssetClassRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: UpdateAssetClassResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: UpdateAssetClassNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface UpdateAssetClassRequest {
    id: MongoId,
    typeName: String
}

interface UpdateAssetClassResponse {
    status: true,
    message: "Sucessfully updated the assetClass",
    data: IAssetClass
}

interface UpdateAssetClassNotFound {
    status: false,
    message: "Asset class doesnt exist"
}