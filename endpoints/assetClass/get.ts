import { endpoint, request, body, response, defaultResponse, queryParams } from "@airtasker/spot";
import { ApiError, BadRequest } from "../../misc";
import { IAssetClass } from "../../schemas/assetClass";

/**
 * Get all asset classes
 */
@endpoint({
    method: "GET",
    path: "/assetClass/get",
    tags: ["ASSET CLASS"]
})
class GetAssetClass {
    @request
    request(@queryParams queryParams: GetAssetClassRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetAssetClassResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetAssetClassRequest {
}

interface GetAssetClassResponse {
    status: true,
    message: "Sucessfully fetched Asset classes",
    data: IAssetClass[]
}
