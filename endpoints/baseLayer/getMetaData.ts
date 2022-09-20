import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";

/**
 * Get base layer
 */
@endpoint({
    method: "PATCH",
    path: "/baselayer/get-meta-data",
    tags: ["BASE LAYER"]
})
class GetMetaDataBaseLayer {
    @request
    request(@body body: GetMetaDataBaseLayerRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetMetaDataBaseLayerResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 403 })
    InvalidRequest(@body body: {
        status: false,
        message: "Only one type of layers can be mapped",
        /**
         * Layer types found. Layers should be of same type.
         */
        data: string[]
    }) {}

    @response({ status: 404 })
    NotFound(@body body: GetMetaDataBaseLayerNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetMetaDataBaseLayerRequest {
    layers: MongoId[]
}

interface GetMetaDataBaseLayerResponse {
    status: true,
    message: "got the right stuff",
    data: {
        missionId: MongoId,
        missionName: string,
        layers: {
            _id: MongoId,
            name: string,
            fields: string[]
        }[]
    }[]
}

interface GetMetaDataBaseLayerNotFound {
    status: false,
    message: "Some Layers Not Found"
}