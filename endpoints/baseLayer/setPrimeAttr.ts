import { endpoint, request, body, response, defaultResponse, queryParams } from "@airtasker/spot";
import { ApiError, Attrs, BadRequest, FilePath, MongoId } from "../../misc";
import { ILayer } from "../../schemas/layer";

/**
 * Get base layer
 */
@endpoint({
    method: "PUT",
    path: "/baselayer/set-prime-attr",
    tags: ["BASE LAYER"]
})
class SetPrimeAttr {
    @request
    request(@body body: SetPrimeAttrRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: SetPrimeAttrResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: SetPrimeAttrNotFound) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface SetPrimeAttrRequest {
    path: FilePath,
    pattr: Attrs[],
    id: MongoId,
}

interface SetPrimeAttrResponse {
    status: true,
    message: "Prime attributes added successfully",
    /**
     * Vector is populated
     */
    data: ILayer
}

interface SetPrimeAttrNotFound {
    status: false,
    message: "file path not exist! "
}