import { MongoId } from "../misc";

export interface IPayment {
    _id: MongoId,
    razorpay_order_id: string,
    razorpay_payment_id: string,
    razorpay_signature: string,
    amount: number,
    currency: string,
    status: string,
    tenant: MongoId,
    paidon: string,
    package: MongoId,
    createdAt: Date,
    updatedAt: Date,
}
