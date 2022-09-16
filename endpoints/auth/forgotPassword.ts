import { endpoint, request, body, response, defaultResponse, String, DateTime } from "@airtasker/spot";
import { ApiError, BadRequest} from "../../misc";

/**
 * Mail password reset token
 */
@endpoint({
    method: "POST",
    path: "/auth/forgot-password",
    tags: ["AUTH"]
})
class ForgotPasswordAuth {
    @request
    request(@body body: ForgotPasswordAuthRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: ForgotPasswordAuthResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: ForgotPasswordAuthNotFound) { }

    @response({ status: 500 })
    ServerError(@body body: {
        status: false,
        message: "Something Went Wrong! Please try again"
    }) {}

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface ForgotPasswordAuthRequest {
    email: String
}

interface ForgotPasswordAuthResponse {
    status: true,
    message: "Check Your Mail To Reset Password",
}

interface ForgotPasswordAuthNotFound {
    status: false,
    message: "Email is not registered"
}