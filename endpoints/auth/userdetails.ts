import { endpoint, request, body, response, defaultResponse, String, DateTime } from "@airtasker/spot";
import { ApiError, BadRequest } from "../../misc";
import { IUser } from "../../schemas/user";

/**
 * Get user details
 */
@endpoint({
    method: "GET",
    path: "/auth/userdetails",
    tags: ["AUTH"]
})
class UserDetailsAuth {
    @request
    request() { }

    @response({ status: 201 })
    successfulResponse(@body body: UserDetailsAuthResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface UserDetailsAuthResponse {
    status: true,
    message: "user details fetched",
    /**
     * Custom permissions User group permissions are populated
     */
    data: IUser,
}
