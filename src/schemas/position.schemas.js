import { Schema, model, Types } from "mongoose";

const posSchema = new Schema(
  {
    dep_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "departments",
      key: "_id",
    },
    pos_name: {
      type: String,
      required: true,
      maxLength: 25,
    },
    salary: {
      type: Number,

    },
  },
  {
    timestamps: {
      deletedAt: "deleted_at",
    },
  }
);

export default model("positions", posSchema);
