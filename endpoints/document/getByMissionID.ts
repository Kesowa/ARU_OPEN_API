import { endpoint, request, body, response, defaultResponse, queryParams } from "@airtasker/spot";
import { ApiError, MongoId, BadRequest } from "../../misc";
import { IDocument } from "../../schemas/document";
import { IMission } from "../../schemas/mission";
/**
 * Get Documents, images uploaded to a mission
 */
@endpoint({
    method: "GET",
    path: "/document/getbymissionId",
    tags: ["DOCUMENT"]
})
class GetDocumentByMissionID {
    @request
    request(@queryParams queryParams: GetDocumentByMissionIDRequest) { }

    @response({ status: 200 })
    successfulResponse(@body body: GetDocumentByMissionIDResponse) { }

    @response({ status: 400 })
    BadRequest(@body body: BadRequest) { }

    @response({ status: 404 })
    NotFound(@body body: GetDocumentByMissionIDNotFound) { }

    @defaultResponse
    defaultResponse(@body body: ApiError) { }
}

interface GetDocumentByMissionIDRequest {
    // page: Integer,
    // limit: Integer,
    // /** Sort using field name in desc or asc order
    //  * @oaSchemaProp title
    //  * "Sort Documents, Images"
    //  * @oaSchemaProp pattern
    //  * "^(createdAt|updatedAt|location|locationName|pcount|fileSize|type):(desc|asc)$"
    //  * @oaSchemaProp example
    //  * "createdAt:desc"
    //  *  */
    // sortBy: string,
    missionId: MongoId,
}

interface GetDocumentByMissionIDResponse {
    status: true,
    message: "Documents fetched successfully",
    data: {
        mission: IMission["name"],
        documents: IDocument[]
    },
}

interface GetDocumentByMissionIDNotFound {
    status: false,
    message: "Document does not exist for ${id}",
}