import { endpoint, request, body, response, defaultResponse } from "@airtasker/spot";
import { ApiError, BadRequest, MongoId } from "../../misc";
import { IUserCustomPermission } from "../../schemas/user";

/**
 * Login user, receive session token
 */
@endpoint({
    method: "POST",
    path: "/auth/login",
    tags: ["AUTH"]
})
class LoginAuth {
    @request
    request(@body body: LoginAuthRequest) { }

    @response({ status: 201 })
    successfulResponse(@body body: LoginAuthResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: LoginAuthNotFound) { }

    @response({ status: 401 })
    Unauthorized(@body body: LoginAuthUnauthorized) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface LoginAuthRequest {
    email: string,
    password: string,
}

interface LoginAuthResponse {
    status: true,
    message: "login sucessfully",

    data: IUserCustomPermission,
    /**
     * Session ID
     * 
     * Use in bearer token
     */
    token: MongoId
}

interface LoginAuthNotFound {
    status: false,
    message: "email does not exist."
}

interface LoginAuthUnauthorized {
    status: false,
    message: "User is not active"
    | "Client has expired"
    | "invalid password."
    | "The credentials you are trying to log-in with are expired!"
}