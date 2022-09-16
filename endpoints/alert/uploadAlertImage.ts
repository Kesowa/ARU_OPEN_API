import { endpoint, request, body, response } from "@airtasker/spot";
import { FilePath } from "../../misc";

/**
 * This should be a multipart form-data
 * Upload alert image
 */
@endpoint({
    method: "POST",
    path: "/users"
})
class UploadAlertImage {
    @request
    request(
        @body body: Request
    ) { }

    @response({ status: 201 })
    successfulResponse(
        @body body: SuccessResponse
    ) { }

    @response({status: 400})
    BadResponse(
        @body body: BadResponse
    ) { }
}

interface Request {
    image: Blob;
}

interface SuccessResponse {
    status: true,
    message: "file uploaded successfully",
    file: FilePath
}

interface BadResponse {
    status: false,
    message: "Invalid file."
}