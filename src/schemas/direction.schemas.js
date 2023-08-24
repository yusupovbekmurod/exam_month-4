import { Schema, model, Types } from "mongoose";

const direcSchemas = new Schema(
  {
    dep_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "departments",
      key: "_id",
    },
    dir_name: {
      type: String,
      required: true,
      maxLength: 30,
    },
    duration: {
      type: Number,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "start_date",
      deleteAt: "end_date",
    },
  }
);

export default model("directions", direcSchemas);
