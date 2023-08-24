import { Schema, model, Types } from "mongoose";

const outlaySchema = new Schema(
  {
    reason: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "out_time",
    },
  }
);

export default model("outlay", outlaySchema);
