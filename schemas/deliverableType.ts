import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IDeliverableTypeBase {
    _id: MongoId,
    name: string,
    description: string,
    imageURL?: string,
    isActive?: boolean
    createdAt: DateTime,
    updatedAt: DateTime,

}

export interface IDeliverableTypeLink {
    createdBy: MongoId,
    updatedBy: MongoId,
}

export interface IDeliverableType extends IDeliverableTypeBase, IDeliverableTypeLink {}