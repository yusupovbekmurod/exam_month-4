import { Schema, model, Types } from "mongoose";

const userSchema = new Schema(
  {
    gr_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "groups",
      key: "_id",
    },
    user_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "users",
      key: "_id",
    },
    not_in_class: {
      type: Array,
    },
  },
  {
    timestamps: {
      createdAt: "add_date",
    },
  }
);

export default model("checks", userSchema);
