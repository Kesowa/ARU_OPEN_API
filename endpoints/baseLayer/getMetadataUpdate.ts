import { endpoint, request, body, response, defaultResponse, String } from "@airtasker/spot";
import { ApiError, Attrs, BadRequest, MongoId } from "../../misc";

/**
 * Get base layer
 */
@endpoint({
    method: "PATCH",
    path: "/baselayer/get-meta-data-for-update",
    tags: ["BASE LAYER"]
})
class GetMetaDataUpdate {
    @request
    request(@body body: GetMetaDataUpdateRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetMetaDataUpdateResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetMetaDataUpdateNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetMetaDataUpdateRequest {
    layers: MongoId[],
    baseLayer: MongoId
}

interface GetMetaDataUpdateResponse {
    status: true,
    message: "got the data",
    data: {
        pattr: Attrs[],
        layerAttr: {
            missionId: MongoId,
            missionName: String,
            layers: {
                _id: MongoId,
                name: String,
                fields: String[]
            }[]
        }[]
    }
}

interface GetMetaDataUpdateNotFound {
    status: false,
    message: "Asset doesnt exist" | "Only one type of layers can be mapped" | "Vector type of base layer is different than selected layers"
}