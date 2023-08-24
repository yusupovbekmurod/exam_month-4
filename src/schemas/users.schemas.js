import { Schema, model, Types } from "mongoose";

const userSchema = new Schema(
  {
    pos_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "positions",
      key: "_id",
    },
    first_name: {
      type: String,
      required: true,
      maxLength: 20,
    },
    last_name: {
      type: String,
      required: true,
      maxLength: 20,
    },
    gender: {
      type: String,
      maxLength: 10,
    },
    contact: {
      type: String,
      maxLength: 15,
    },
    email: {
      type: String,
      maxLength: 64,
    },
    group_ref_id: {
      type: Types.ObjectId,
      ref: "groups",
      key: "_id",
    },
  },
  {
    timestamps: {
      createdAt: "come_date",
      updatedAt: "left_date",
    },
  }
);

export default model("users", userSchema);
