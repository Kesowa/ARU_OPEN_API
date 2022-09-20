import { DateTime } from "@airtasker/spot";
import { MongoId } from "../misc";

export interface IPaymentBase {
    _id: MongoId,
    razorpay_order_id: string,
    razorpay_payment_id: string,
    razorpay_signature: string,
    amount: number,
    currency: string,
    status: string,
    paidon: string,
    createdAt: DateTime,
    updatedAt: DateTime,
}

export interface IPaymentLink {
    tenant: MongoId,
    package: MongoId,
}

export interface IPayment extends IPaymentBase, IPaymentLink {}