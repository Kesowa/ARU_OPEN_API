import { endpoint, request, body, response, defaultResponse, Date, String } from "@airtasker/spot";
import { ApiError, BadRequest, Color, File, Properties, SizeExceeded } from "../../misc";
import { ILayer } from "../../schemas/layer";

/**
 * Must be multipart/form-data
 */
@endpoint({
    method: "POST",
    path: "/baselayer/create/Vector",
    tags: ["BASE LAYER"]
})
class CreateBaseLayer {
    @request
    request(@body body: CreateBaseLayerRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: CreateBaseLayerResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: CreateBaseLayerNotFound) { }

    @response({ status: 403 })
    SizeError(@body body: SizeExceeded) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface CreateBaseLayerRequest {
    file: File,
    name: String,
    type: "Vector",
    captureDate: Date,
    color: Color,
    icon?: String,
    inHeritOriginalColorFromFile: "true" | "false",

}

interface CreateBaseLayerResponse {
    status: true,
    message: "New Layer Created",
    data: {
        layer: ILayer,
        properties: Properties & { Nth: Properties }
    }
}

interface CreateBaseLayerNotFound {
    status: false,
    message: "file path not exist! " | "Color selection error" | "Failed! GEOJSON does not have color"
}