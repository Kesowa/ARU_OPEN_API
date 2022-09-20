import { endpoint, request, body, response, defaultResponse, pathParams } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";

/**
 * Trigger password reset mail
 * 
 * Renders reset password page
 */
@endpoint({
    method: "GET",
    path: "/auth/reset-password/:token",
    tags: ["AUTH"]
})
class GetResetPasswordAuth {
    @request
    request(@pathParams pathParams: GetResetPasswordAuthRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: GetResetPasswordAuthResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetResetPasswordAuthRequest {
    token: MongoId,
}

interface GetResetPasswordAuthResponse {
    status: true,
    message: "",
    token: MongoId
}

/**
 * Set new password
 */
@endpoint({
    method: "POST",
    path: "/auth/reset-password/:token",
    tags: ["AUTH"]
})
class PostResetPasswordAuth {
    @request
    request(
        @pathParams pathParams: { token: MongoId },
        @body body: {
            password: string,
            password2: string
        }
    ) { }

    @response({ status: 201 })
    successfulResponse(@body body: GetResetPasswordAuthResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: {
        token: MongoId,
        message: "Password doesn't match"
    }) { }

    @response({ status: 401 })
    BadToken(@body body: {
        token: MongoId,
        message: "Invalid Token"
    }) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}