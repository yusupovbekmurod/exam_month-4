import { Schema, model, Types } from "mongoose";

const incomSchema = new Schema(
  {
    user_ref_id: {
      type: Types.ObjectId,
      required: true,
      ref: "users",
      key: "_id",
    },
    reason: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "inc_time",
    },
  }
);

export default model("incomes", incomSchema);
