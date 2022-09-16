import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { FilePath, File, ApiError, BadRequest, SizeExceeded } from "../../misc";

/**
 * This should be a multipart form-data
 */
@endpoint({
    method: "POST",
    path: "/alert/upload-alert-image",
    tags: ["ALERT"]
})
class UploadAlertImage {
    @request
    request(@body body: UploadRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: UploadResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 403 })
    SizeError(@body body: SizeExceeded) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface UploadRequest {
    image: File;
}

interface UploadResponse {
    status: true,
    message: "file uploaded successfully",
    file: FilePath
}
