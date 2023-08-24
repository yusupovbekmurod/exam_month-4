import posModel from "../schemas/position.schemas.js";
import { Types } from "mongoose";
class Positions {
  async select(id, filter, option) {
    try {
      if (id) return await posModel.findById(id, option).populate("dep_ref_id");
      return await posModel.find(filter, option).populate("dep_ref_id");
    } catch (error) {
      return error.message;
    }
  }
  async insert(body) {
    try {
      return await posModel.create(body);
    } catch (error) {
      return error.message;
    }
  }
  async update(id, obj) {
    return await centrMod.findOneAndUpdate(id, obj);
  }
  async delete(id) {
    return await posModel.updateOne(
      { _id: new Types.ObjectId(id) },
      { delete_at: Date.now() },
      { upsert: true }
    );
  }
}

export default new Positions();
