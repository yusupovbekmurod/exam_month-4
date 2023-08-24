import { Schema, model, Types } from "mongoose";

const centerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 50,
    },
    address: {
      type: String,
      required: true,
      maxLength: 128,
    },
  },
  {
    timestamps: {
      createdAt: "open_date",
      deletedAt: "close_date",
    },
  }
);

export default model("centers", centerSchema);
