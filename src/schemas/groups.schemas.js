import { Schema, model, Types } from "mongoose";

const grSchemas = new Schema(
  {
    dir_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "directions",
      key: "_id",
    },
    gr_number: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createAt: "begin_date",
      deleteAt: "deleted_at",
    },
  }
);

export default model("groups", grSchemas);
