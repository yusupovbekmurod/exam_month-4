import { Schema, model, Types } from "mongoose";

const depSchema = new Schema(
  {
    center_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "centers",
      key: "_id",
    },
    dep_name: {
      type: String,
      required: true,
      maxLength: 60,
    },
  },
  {
    timestamps: {
      createdAt: "create_at",
      deleteAt: "delete_at",
    },
  }
);

export default model("departments", depSchema);
