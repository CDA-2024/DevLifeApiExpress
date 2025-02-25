import { Types } from "mongoose";

export class User {
  constructor(
    public _id: Types.ObjectId,
    public name: string,
    public email: string,
    public password: string,
    public role: string,
    public is_tutorial_finished: boolean,
    public email_verified: boolean,
    public verification_token: string,
    public verification_token_expires: Date,
    public is_deleted: boolean
  ) {}
}
